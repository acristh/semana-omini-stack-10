const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-oav4x.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Tipos de parametros:

// Query Params: usados no metodo get acessados por req.query
// Route Params: usado nos metodos PUT ou DELETE
// Body: usado no POST e no PUT para criar ou alterar


app.listen(3333);