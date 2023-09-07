//Importação de pacotes/módulos para uso da aplicação
var express = require("express"); //Importação do pacote express
var app = express(); //Inicialização da aplicação 'app' pelo pacote
express;
//Importação do pacote mongoose
var mongoose = require("mongoose");
//Configuração da conexão com o MongoDB no serviço cloud MongoDB Atlas
const uri =
  "mongodb+srv://jeancscheibe:PE1LJXbPBKqkBHgW@cluster1.fxg9mnn.mongodb.net/";
//Validação da configuração da conexão com o MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("A conexão com o MongoDB foi realizada com sucesso!");
  })
  .catch((err: any) => {
    console.log(err);
  });
//Rota para exibir uma mensagem ao usuário
app.get("/", (_req: any, res: { send: (arg0: string) => void }) => {
  res.send("Olá mundo! Esta é a página inicial da nossa aplicação.");
});
//A porta é uma variável de ambiente
const porta = process.env.PORT || 8080;
app.listen(porta, () =>
  console.log("Servidor inicializado na porta: " + porta)
);
