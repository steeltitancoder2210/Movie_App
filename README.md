# FlickFinder:-A Movie App

## Overview
FlickFinder is a React Native application that allows users to explore the latest, upcoming, and trending movies. Users can view details such as release dates, languages, ratings, genres, and overviews, as well as detailed profiles of the actors in the films. The app enhances user engagement with optimized data handling and performance improvements.

## Features
- Browse trending, latest, and upcoming movies
- View detailed information about each movie, including:
  - Release date
  - Language
  - Ratings
  - Genres
  - Overview
- Actor profile pages with biographies and filmography
- User authentication using Node.js, Express.js, and MongoDB
- Integration of TMDB Movie API for fetching movie data
- Optimized data handling for better performance

## Tech Stack
- **Frontend:** React Native
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB
- **Authentication:** User authentication with Express.js and MongoDB
- **API Integration:** TMDB Movie API using Axios

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- Node.js
- React Native CLI or Expo
- MongoDB

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/imdb-movie-app.git
   cd imdb-movie-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add:
     ```sh
     TMDB_API_KEY=your_tmdb_api_key
     MONGO_URI=your_mongodb_connection_string
     ```
4. Start the backend server:
   ```sh
   cd backend
   npm start
   ```
5. Start the React Native app:
   ```sh
   npm start
   ```

## Deployment
- The backend can be deployed on platforms like **Heroku** or **AWS**.
- The React Native app can be built for Android and iOS using **Expo** or native builds.

## Future Improvements
- Add user reviews and ratings for movies
- Implement a watchlist feature
- Enhance UI with animations and better navigation
- Improve search functionality with filters

## Contribution
Contributions are welcome! If you'd like to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## Contact
If you have any questions or feedback, feel free to reach out:
- **Email:** prakharsinghal52@gmail.com
- **GitHub:** [steeltitancoder2210](https://github.com/steeltitancoder2210)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

