# Pokemon App Frontend

## Prerequisites
* Node.js and npm (or yarn) installed on your system.

## Description

This is the frontend application for a Pokemon information portal. It allows users to browse Pokemon, view their details, and manage their own Pokemon collections. Users also can show Weather information regarding to their location. 

## Getting Started
1. Clone repository
   ```shell
    git clone https://github.com/gopichardo/pokeapp-frontend.git
    cd pokeapp-frontend
   ``` 
2. Install dependencies.
    ```shell
    npm install
    ```
3. Configure environment variables.
   1. Create `.env` file at the root of the project.
   2. Set **env** variables on `.env` file with real values
        ```shell
        VITE_OPENWEATHERMAP_API_KEY=
        VITE_GOOGLE_MAPS_API_KEY=
        VITE_POKEAPI_BASE_URL=https://pokeapi.co/api/v2/
        VITE_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/forecast
        ```
4. Run the application
    ```shell
    npm run dev
    ```

## Libraries Used
* React: JavaScript library for building user interfaces.
* TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
* Vite: Frontend build tool that offers fast development experience.
* Axios or Fetch API: For making API calls to the backend.
* Styling Library (e.g., styled-components, Material UI, etc.): For styling the application.
* React Router: For routing and navigation.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
non-comercial use only.

## Author
Mail: [gopichardoces@gmail.com](gopichardoces@gmail.com) | Linkedin: [gopichardoces](https://www.linkedin.com/in/gopichardoces/) | GitHub: [gopichardo](https://github.com/gopichardo)