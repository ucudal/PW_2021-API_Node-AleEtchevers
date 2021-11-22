var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors({
    origin: '*'
}));

app.get('/experiencia-laboral', function(req, res) {
  experiencia_laboral = {
    "experiencia_laboral": [
      {
        "empresa": "Agencia del BSE",
        "puesto": "Area de Comercio",
        "descripcion": "Agencia de Seguros del BSE. Trabaje en el area de comercio y comunicación con el cliente.",
        "fechaInicio": "01-03-2018",
        "fechaFin": "10-02-2021"
      },
      {
        "empresa": "Parroquia Stella Maris - Movimiento Sembradores",
        "puesto": "Acción Social - Ayudante",
        "descripcion": "Ayudante en el movimiento Sembradores. Es un grupo de personas las cuales le dan de comer y le brindan ayuda a gente con situación de calle",
        "fechaInicio": "30-06-2019",
        "fechaFin": "21-12-2019"
      },
      {
        "empresa": "EagerWorks",
        "puesto": "Fullstack Developer",
        "descripcion": "EagerWorks es una Software Factory especializada en desarrollo web y mobile para iOS y Android. Desarrolladora Junior Fullstack de Aplicaciones Web utilizando Ruby on Rails para su implementacion.",
        "fechaInicio": "21-04-2021",
        "fechaFin": "Presente"
      }
    ]
  }
  res.send(experiencia_laboral);
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;