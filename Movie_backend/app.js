

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");

app.use(express.json());
app.use(cors()); 

const mongourl = "mongodb+srv://SPrakh0122:Prakh2210@cluster0.h1bss2n.mongodb.net/yourDatabaseName?retryWrites=true&w=majority";

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((e) => console.log("Error connecting to MongoDB:", e));

require("./userDetail");
const User = mongoose.model("UserInfo");

app.get("/", (req, res) => {
    res.send({ status: "Started" });
});

app.post('/register', async (req, res) => {
    const { name, email, mobile, password } = req.body;
    const oldUser = await User.findOne({ email: email });

    if (oldUser) {
        return res.send({ data: "User already exists!" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            name: name,
            email: email,
            mobile: mobile,
            password: encryptedPassword,
        });
        res.send({ status: "ok", data: "User created" });
    } catch (error) {
        res.send({ status: "error", data: error });
    }
});

app.post('/login', async (req, res) => {
    const { emailOrMobile, password } = req.body;
    const user = await User.findOne({ $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }] });

    if (!user) {
        return res.send({ status: "error", data: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.send({ status: "error", data: "Invalid password" });
    }

    res.send({ status: "ok", data: "Login successful" });
});

app.listen(5001, () => {
    console.log("Server started on port 5001.");
});
