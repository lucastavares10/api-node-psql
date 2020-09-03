
const port = process.env.PORT || 8412;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./controllers/authController')(app);

app.get('/', (req, res) => {
    html = '<html><body style= "text-align: center; margin-top:150px">';
    html += '<h1>API</h1>';
    html += '<h3>/auth/cadastrar (nome, email, senha)</h3>';
    html += '<h3>/auth/listar</h3>';
    html += '<h3>/auth/deletar/:id</h3>';
    html += '<h3>/auth/editar/:id</h3>';
    html += '</body></html>';''

    res.send(html);
});

module.exports = app.listen(port, () => console.log(`Listening on PORT: ${port}`));
