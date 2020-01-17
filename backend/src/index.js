const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({message:'Semana Omini Stack 10'});
});

app.listen(3333);