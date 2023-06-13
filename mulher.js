const express = require("express");
const router = express.Router();

const app = express();

const porta = 3333;

function mostraMulher(request, response) {
  response.json({
    nome: "Avril Lavigne",
    imagem:
      "https://hollywoodforevertv.com.br/media/uploads/avril-lavigne-noticia-inacreditavel.jpg",
    bio: "O amor da Minha Vida",
  });
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get("/mulher", mostraMulher));
app.listen(porta, mostraPorta);
