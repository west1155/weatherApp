
# Weather App

This is a Weather App built with React, Redux, and TypeScript, leveraging a weather API to provide current weather information for different locations.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Current Weather Information**: Get the current weather conditions for any location.
- **Search Functionality**: Search for weather information by city name.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Redux for State Management**: Efficient state management using Redux.
- **TypeScript**: Strongly typed code for better maintainability and fewer runtime errors.

## Getting Started

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the App
1. Create a `.env` file in the root directory and add your weather API key:
    ```
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```
2. Start the development server:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```
3. Open your browser and navigate to `http://localhost:3000`.

## Usage
- **Search for a City**: Enter the name of the city in the search bar and press enter. The app will display the current weather conditions for the searched city.
- **View Weather Details**: The app shows temperature, humidity, wind speed, and weather description for the selected city.

## Folder Structure
```

## API Integration
This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. To use this API, sign up on their website and get an API key. Add this key to the `.env` file in the root directory as shown in the [Running the App](#running-the-app) section.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to the project or suggest improvements! Happy coding!
