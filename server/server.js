const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('dist'));
app.use(express.static('src'));

app.get('/resume', function(request, response){
    var tempFile="src/photo/Lexius_Waltar_0.0.3.pdf";
    fs.readFile(tempFile, function (err,data){
       response.contentType("application/pdf");
       response.send(data);
    });
  });
module.exports = app;