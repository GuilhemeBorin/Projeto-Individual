// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var usuarioRouter = require("./src/routes/usuarios");
var quizRouter = require("./src/routes/quiz");
var medidasRouter = require("./src/routes/medidas");
var formularioRouter = require("./src/routes/formulario")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/quiz", quizRouter);
app.use("/medidas", medidasRouter);
app.use("/formulario", formularioRouter)

app.listen(PORTA_APP, function () {
    // ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    // ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    // ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    // ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    // #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    // ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    // ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  

    console.log(`
    OOOOOOOOO               RRRRRRRRRRRRRRRRR                                                                              
    OO:::::::::OO             R::::::::::::::::R                                                                             
  OO:::::::::::::OO           R::::::RRRRRR:::::R                                                                            
 O:::::::OOO:::::::O          RR:::::R     R:::::R                                                                           
 O::::::O   O::::::O            R::::R     R:::::R  aaaaaaaaaaaaa  ppppp   ppppppppp   ppppp   ppppppppp     aaaaaaaaaaaaa   
 O:::::O     O:::::O            R::::R     R:::::R  a::::::::::::a p::::ppp:::::::::p  p::::ppp:::::::::p    a::::::::::::a  
 O:::::O     O:::::O            R::::RRRRRR:::::R   aaaaaaaaa:::::ap:::::::::::::::::p p:::::::::::::::::p   aaaaaaaaa:::::a 
 O:::::O     O:::::O            R:::::::::::::RR             a::::app::::::ppppp::::::ppp::::::ppppp::::::p           a::::a 
 O:::::O     O:::::O            R::::RRRRRR:::::R     aaaaaaa:::::a p:::::p     p:::::p p:::::p     p:::::p    aaaaaaa:::::a 
 O:::::O     O:::::O            R::::R     R:::::R  aa::::::::::::a p:::::p     p:::::p p:::::p     p:::::p  aa::::::::::::a 
 O:::::O     O:::::O            R::::R     R:::::R a::::aaaa::::::a p:::::p     p:::::p p:::::p     p:::::p a::::aaaa::::::a 
 O::::::O   O::::::O            R::::R     R:::::Ra::::a    a:::::a p:::::p    p::::::p p:::::p    p::::::pa::::a    a:::::a 
 O:::::::OOO:::::::O          RR:::::R     R:::::Ra::::a    a:::::a p:::::ppppp:::::::p p:::::ppppp:::::::pa::::a    a:::::a 
  OO:::::::::::::OO           R::::::R     R:::::Ra:::::aaaa::::::a p::::::::::::::::p  p::::::::::::::::p a:::::aaaa::::::a 
    OO:::::::::OO             R::::::R     R:::::R a::::::::::aa:::ap::::::::::::::pp   p::::::::::::::pp   a::::::::::aa:::a
      OOOOOOOOO               RRRRRRRR     RRRRRRR  aaaaaaaaaa  aaaap::::::pppppppp     p::::::pppppppp      aaaaaaaaaa  aaaa
                                                                    p:::::p             p:::::p                              
                                                                    p:::::p             p:::::p                              
                                                                   p:::::::p           p:::::::p                             
                                                                   p:::::::p           p:::::::p                             
                                                                   p:::::::p           p:::::::p                             
                                                                   ppppppppp           ppppppppp                             
                                                                                                                                                                                                                           
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
