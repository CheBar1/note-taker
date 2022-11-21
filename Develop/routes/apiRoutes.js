const express = require('express');
const uuid = require('uuid');
const app = express.Router();

let data = require('../db/db.json');

app.get('/', (req, res) => res.json(data));

app.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Need non-empty title and text input.'})
    } else {
        const newNote = {
            id: uuid.v4(),
            title: newTitle,
            text: newText
        };
        data.push(newNote);
        res.json(newNote);
    };
});

app.delete('/:id', (req, res) => {
    const found = data.some(obj => obj.id === req.params.id);
    if (found) {
        data = data.filter(obj => obj.id !== req.params.id);
        res.json(data);
    } else {
        res.status(400).json(data);
    };
});

module.exports = app;
