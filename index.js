// import d'express

const express = require('express');

// Création de l'application qui appelle le module express

const app = express();

// Création d'une constante pour stocker le numéro du port du serveur

const port = 5001;

// Création des routes

    // Route "/""

    app.get("/", (req, res) => {
    res.send("Welcome to Express");
    });

    // Route "/search"

    const handler = (req, res) => {};
    app.get("/search", handler);

    // Route "users/name"

    const welcomeName = (req, res) => {
        res.send(`Welcome ${req.params.name}`);
    };
    app.get("/users/:name", welcomeName);

// Ecoute des connexions entrantes en utilisant app.listen

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

  // Création d'une API

    const cocktails = [
        {
        id: 1,
        name: "Margarita",
        },
        {
        id: 2,
        name: "Mojito",
        },
        {
        id: 3,
        name: "Cuba Libre",
        },
    ];
    
    const getCocktails = (req, res) => {
        res.status(200).json(cocktails);
    };
    
    app.get("/api/cocktails", getCocktails);