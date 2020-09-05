const express = require('express');
const app = express();
app.get('/users', function(req, res) {
    console.log("hello");
});

const rooms = {
    rooms: []
};

app.get('/rooms', function(req, res) {
    res.json(rooms);
});

app.listen(3000);