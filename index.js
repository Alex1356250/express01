// import d'express

const express = require('express');

// Création de l'application qui appelle le module express

const app = express();

// Création d'une constante pour stocker le numéro du port du serveur

const port = 5001;

  // Création d'une API

  const movies = [
    {
      id: 1,
      title: "Citizen Kane",
      director: "Orson Wells",
      year: "1941",
      color: false,
      duration: 120,
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: "1972",
      color: true,
      duration: 180,
    },
    {
      id: 3,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: "1994",
      color: true,
      duration: 180,
    },
  ];

// Création des routes

    // Route "/"

    app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
    });

    // Route "/api/movies"

    const getMovies = (req, res) => {
        res.status(200).json(movies);
    };
    
    app.get("/api/movies", getMovies);

    // Route "/api/movies/:id"

    const getMoviesById = (req, res) => {
        const movieId = parseInt(req.params.id, 10);
        const movie = movies.find(m => m.id === movieId);
    
        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(404).send("Not Found");
        }
    };
    
    app.get("/api/movies/:id", getMoviesById);


// Ecoute des connexions entrantes en utilisant app.listen

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
