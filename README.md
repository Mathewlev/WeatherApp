# Weather App

A React and Node.js web app, written in TypeScript.

- `client/`: React frontend, built with Vite
- `server/`: Express API

## Getting started

Requires [Node.js](https://nodejs.org).

```
npm install
npm run dev
```

Then open http://localhost:5173. The API runs on http://localhost:3001, and the client forwards `/api` requests to it.

## Build

```
npm run build
```

To run the built server:

```
npm start -w server
```
