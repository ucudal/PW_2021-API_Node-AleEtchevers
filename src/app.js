var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var jsonParser = bodyParser.json();

app.use(cookieParser());
app.use(cors({ origin: '*'}));
app.use(express.urlencoded({ extended: true }));

var experiencia_laboral = {
  "experiencia-laboral": [
    {
      "empresa": "Agencia del BSE",
      "puesto": "Area de Comercio",
      "descripcion": "Agencia de Seguros del BSE. Trabaje en el area de comercio y comunicación con el cliente.",
      "fechaInicio": new Date("01/03/2018"),
      "fechaFin": new Date("10/02/2021")
    },
    {
      "empresa": "Parroquia Stella Maris - Movimiento Sembradores",
      "puesto": "Acción Social - Ayudante",
      "descripcion": "Ayudante en el movimiento Sembradores. Es un grupo de personas las cuales le dan de comer y le brindan ayuda a gente con situación de calle",
      "fechaInicio": new Date("30/06/2019"),
      "fechaFin": new Date("21/12/2019")
    },
    {
      "empresa": "EagerWorks",
      "puesto": "Fullstack Developer",
      "descripcion": "EagerWorks es una Software Factory especializada en desarrollo web y mobile para iOS y Android. Desarrolladora Junior Fullstack de Aplicaciones Web utilizando Ruby on Rails para su implementacion.",
      "fechaInicio": new Date("21/04/2021"),
      "fechaFin": null
    }
  ]
}

app.get('/experiencia-laboral', function(req, res) {
  res.send(experiencia_laboral);
});

app.post('/enviar-formulario', jsonParser, function(req, res) {
  const nombreContacto = req.body.nombreContacto;
  if (!nombreContacto) {
    return res.status(400).send("Falta el nombre de contacto");
  }
  res.cookie("PW_2021-CV_Contacto", nombreContacto);
  res.send(`Gracias por tu contacto, ${nombreContacto}. Me comunicaré pronto!`);
});

app.post("/*", jsonParser, function(req, res) {
  res.status(404).send("404 - No fue encontrado");
});

app.listen(process.env.PORT || 3001, (a) => {
  console.log("Servidor disponible en http://localhost:3001")
});
 
module.exports = app;
