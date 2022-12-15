const express = require('express');
const app = express();

//CRUD - Create Read Update Delete
//       POST   GET   PUT   DELETE

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});