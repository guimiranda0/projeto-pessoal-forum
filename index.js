const express = require("express");
const app = express();

// Dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');

// Com essa linha de código consigo carregar arquivos estáticos
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
}); 

app.listen(4000, () => {
    console.log("Deu certo!");
})