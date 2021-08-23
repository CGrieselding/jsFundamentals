const express = require('express');
const router = express.Router();
const { JokeModel } = require('../models');

router.get('/', (req, res) => res.send(`PUNctual timing`));

router.get("/all", async (req, res) => {
    try {
        const allJokes = await JokeModel.findAll();

        res.status(200).json(allJokes);
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
});

router.post("/", async (req, res) => {
    const {
        setup,
        punchline,
        cheesiness
    } = req.body;

    try {
        const Joke = await JokeModel.create({
            setup,
            punchline,
            cheesiness
        })

        res.status(201).json({
            message: "Joke was created!",
            Joke
        })
    } catch (err) {
        res.status(500).json({
            message: `Failed to make a joke: ${err}`
        })
    }
});

module.exports = router;