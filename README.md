# MERN Stack Advanced Authentication

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Configuration](#configuration)
- [Quick Start](#quick-start)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)

## General Info

This MERN Stack Advanced Authentication project is based on this [Youtube](https://www.youtube.com/watch?v=YocRq-KesCM) tutorial. I have added Bootstrap and Bootstrap Icons.

## Technologies

Project is created with:

- NodeJS
- Express
- Mongoose
- ReactJS
- React Router Dom

## Features

- Authentication
- Forgot password
- Password reset

## Configuration

Create a `.env` file in the root directory and fill it with the following informations :

```
PORT=5000

DATABASE_CONNECTION="Your DB URI"

JWT_SECRET="Your JWT Secret key"
JWT_EXPIRE="10min"

#For password Reset :

EMAIL_SERVICE=""
EMAIL_PORT=""
EMAIL_USERNAME=""
EMAIL_PASSWORD=""
EMAIL_FROM=""
```

## Quick Start

```Javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Project Status

Project is in progress. The API is completed. Just need work on the React frontend.

## Acknowledgements

- This project was based on this [Youtube](https://www.youtube.com/watch?v=YocRq-KesCM) tutorial.
