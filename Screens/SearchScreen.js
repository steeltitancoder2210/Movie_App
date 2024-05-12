import { View ,Text, Dimensions, TextInput, TouchableOpacity, useAnimatedValue, ScrollView, TouchableWithoutFeedback, Image} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import { debounce } from "lodash";
import { image185, searchMovies } from "../ap/movieDb";

const{width,height}=Dimensions.get('window');



export default function SearchScreen() {
    const movieName = "holakasholag";
    const navigation = useNavigation();
    const [results, setResults] = useState([]); // Corrected state setter name
    const [loading, setLoading] = useState(false);

    const handleSearch = useCallback(
        debounce((value) => {
            if (value && value.length > 2) {
                setLoading(true);
                searchMovies({
                    query: value,
                    include_adult: 'false',
                    language: 'en-us',
                    page: '1'
                }).then(data => {
                    setLoading(false);
                    if (data && data.results)
                        setResults(data.results); // Corrected state setter function
                }).catch(error => {
                    setLoading(false);
                    console.error("Error fetching data: ", error);
                });
            } else {
                setLoading(false);
                setResults([]);
            }
        }, 400),
        []
    );

    return (
        <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
            <View style={{ marginTop: 10, marginHorizontal: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: "grey", borderRadius: 30, borderWidth: 1 }} >
                <TextInput onChangeText={handleSearch} placeholder="Search Movie" placeholderTextColor="lightgrey" style={{ paddingBottom: 6, paddingLeft: 15, flex: 1, fontWeight: "400", color: "white" }} />
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ borderRadius: 20, padding: 5, paddingLeft: 6, margin: 5, backgroundColor: "grey" }}>
                    <XMarkIcon size="25" color="white" />
                </TouchableOpacity>
            </View>

            {loading ? (
                <Loading />
            ) : (
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>
                        {results.length > 0 ? (
                            <>
                                <Text style={{ color: "white", fontWeight: "500", marginLeft: 5 }}>
                                    Results({results.length})
                                </Text>
                                <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                                    {results.map((item, index) => (
                                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push("movie", item)}>
                                            <View style={{ marginBottom: 10 }}>
                                                <Image style={{ width: width * 0.44, height: height * 0.3, borderRadius: 20 }} source={{ uri: image185(item?.poster_path) }} />
                                                <Text style={{ color: "lightgrey", marginLeft: 5 }}>
                                                    {item.title.length > 22 ? item.title.slice(0, 22) + '...' : item.title}
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    ))}
                                </View>
                            </>
                        ) : (
                                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 100 }}>
                                    <Image source={require("../assets/download.jpeg")} style={{ height: 300, width: 300 }} />
                                </View>
                            )}
                    </ScrollView>
                )}
        </SafeAreaView>
    );
}