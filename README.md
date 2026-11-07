# Weather App

A React and Node.js web app, written in TypeScript.

- `client/`: React frontend, built with Vite
- `server/`: Express API

## Getting started

Requires [Node.js](https://nodejs.org) and a free [OpenWeatherMap API key](https://home.openweathermap.org/users/sign_up).

1. Create a file at `server/.env` with your key:

   ```
   OPENWEATHER_API_KEY=your_key_here
   ```

2. Install and run from the project root:

   ```
   npm install
   npm run dev
   ```

Then open http://localhost:5173 and allow location access when your browser asks. The API runs on http://localhost:3001, and the client forwards `/api` requests to it.

If you deny location access, it will still load the page, but with no cards unless the user has some saved.

## Build

```
npm run build
```

To run the built server:

```
npm start -w server
```
