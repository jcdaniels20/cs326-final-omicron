let http = require('http');
let url = require('url');
let express = require('express');

var formidable = require('formidable');
var fs = require('fs');

/*
const exprss = require("express");
const upload = require("express-fileupload")
const file = express();notes
*/


export class MyServer {

    private theDatabase;

    // Server stuff: use express instead of http.createServer
    private server = express();
    private port = 8080;
    private router = express.Router();

    constructor(db) {
	this.theDatabase = db;
	// from https://enable-cors.org/server_expressjs.html
	this.router.use((request, response, next) => {
	    response.header('Content-Type','application/json');
	    response.header('Access-Control-Allow-Origin', '*');
	    response.header('Access-Control-Allow-Headers', '*');
	    next();
	});
	// Serve static pages from a particular path.
	this.server.use(express.static(__dirname + '/html'));


	//Handle CREATE operation
	this.router.get('/create', this.createSightingHandler.bind(this));
	this.router.get('/view', this.viewSightingHandler.bind(this));
	this.router.get('/edit', this.editSightingHandler.bind(this));
	//this.router.get('/getImage', this.getImageHandler.bind(this)); Again server will not run correctly with these in as they reference handlers that do no actually have a function tied to them so commenting them out for release of milestone 2
	//this.router.get('/postImage', this.postImageHandler.bind(this));
	//start
	this.server.use('/nature', this.router);
}
	
private async createSightingHandler(request, response) : Promise<void> {
await this.createSighting(request.query.species, request.query.date, request.query.time, request.query.loc, request.query.lat, request.query.long, request.query.gender, request.query.size, request.query.amount, response);
}

private async viewSightingHandler(request, response) : Promise<void> {
await this.viewSighting(request.query.species, response);	
}

private async editSightingHandler(request, response) : Promise<void> {
await this.editSighting(request.query.species,  request.query.date, request.query.time, request.query.loc, request.query.lat, request.query.long, request.query.gender, request.query.size, request.query.amount, response);	
}

/* Not sure why this handler is handling a handler - breaks the code when run so commenting it out for milestone 2 release
private async getImageHandler(request, response) : Promise<void> {
await this.getImageHandler(request.query.species, response);	
}

private async postImageHandler(request, response) : Promise<void> {
await this.postImageHander(request.query.species, response);	
}
*/

public listen(port) : void  {
	this.server.listen(port);
	}
//private async createSighting(species: string, date: Date, time: number, Lat: number, Long: number, gender: string, size: number, amt : number, response): Promise<void> {
 //	}

public async createSighting(species: string, date: Date, time: Date, loc: string, lat: number, long: number, gender: string, size: number, amount: number, response) : Promise<void> {
console.log("creating sighting entry for '" + species + "'");
await this.theDatabase.putSighting(species, date, time, loc, lat, long, gender, size, amount);
response.write(JSON.stringify({'species' : species,
							'Date' : date,
							'Time' : time,
							'location' : loc,
							'Latitude' : lat,
							'Longitude' : long,
							'Gender' : gender,
							'Size' : size,
							'Amount Seen' : amount					
						}));
response.end();
}

public async editSighting(species: string, date: Date, time: Date, loc: string, lat: number, long: number, gender: string, size: number, amount: number, response) : Promise<void> {
console.log("Editing sighting entry for '" + species + "'");
await this.theDatabase.editSighting(species, date, time, loc, lat, long, gender, size, amount);
response.write(JSON.stringify({'species' : species,
								'Date' : date,
								'Time' : time,
								'location' : loc,
								'Latitude' : lat,
								'Longitude' : long,
								'Gender' : gender,
								'Size' : size,
								'Amount Seen' : amount					
							}));
response.end();
}

public async viewSighting(species : string, response) : Promise<void> {
	let value = await this.theDatabase.get(species);
	response.write(JSON.stringify({'result' : 'read', 
									'value' : value,
									}));
	response.end()
}


}