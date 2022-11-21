const express = require('express');
const app = require('express').Router();
const fs = require('fs');
const path = require('path');

const getPath = (name) => path.join(__dirname, '..', 'public', `${name}.html`);

app.get('/notes', (req, res) => {
    res.sendFile(getPath("notes"));
});

app.get('*', (req, res) => {
    res.sendFile(getPath("index"));
});

module.exports = app; 

 