let http = require('http');
let url = require('url');
let express = require('express');

var formidable = require('formidable');
var fs = require('fs');

const exprss = require("express");
const upload = require("express-fileupload")
const file = express();

file.use(upload());

file.get('/', (request, response) => {
    response.sendFile(__dirname + '/sightings.html')
});

file.post('/', (request, response) => {
    if(request.files){
        // console.log(request.files)
        var image = request.files.filename
        var nameFile = image.name;
        console.log(nameFile)

        image.mv('./uploadImages/' + nameFile,function(err){
            if (err){
                response.send(error)
            }
            else{
                response.send("Thanks for the upload" , nameFile)
            }
        })
    }
});
