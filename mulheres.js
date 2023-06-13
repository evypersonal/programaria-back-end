const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
  {
    nome: "Avril Lavigne",
    imagem:
      "https://hollywoodforevertv.com.br/media/uploads/avril-lavigne-noticia-inacreditavel.jpg",
    bio: "O amor da minha vida",
  },
  {
    nome: "Rihanna",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/09/19/450493996-rihanna-1.jpg",
    bio: "O segundo amor da minha vida",
  },
  {
    nome: "Beyonce",
    imagem:
      "https://www.ofuxico.com.br/wp-content/uploads/2022/06/beyonce-deleta-foto-de-perfil.jpg",
    bio: "O terceiro amor da minha vida",
  },
];

function mostraMulheres(request, response) {
  response.json(mulheres);
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta, mostraPorta);
