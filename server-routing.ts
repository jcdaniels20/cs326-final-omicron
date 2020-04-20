let http = require('http');
let url = require('url');
let express = require('express');


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

	//start
	this.server.use('/sightingsEntry', this.router);
}
	
private async createSightingHandler(request, response) : Promise<void> {
await this.createSighting(request.query.species, request.query.date, request.query.time, request.query.loc, request.query.lat, request.query.long, request.query.gender, request.query.size, request.query.amount, response);
}

private async viewSightingHandler(request, response) : Promise<void> {
await this.viewSighting(request.query.species, response);	
}

public listen(port) : void  {
	this.server.listen(port);
	}

//private async createSighting(species: string, date: Date, time: number, Lat: number, Long: number, gender: string, size: number, amt : number, response): Promise<void> {
 //	}

public async createSighting(species: string, date: Date, time: Date, loc: string, lat: number, long: number, gender: string, size: number, amount: number, response) : Promise<void> {
console.log("creating sighting entry for '" + species + "'");
await this.theDatabase.put(species, [date, time, loc, lat, long, gender, size, amount]);
response.write(JSON.stringify({'Species' : species,
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
									'Species' : species,
									'values' : value}));
	response.end()
}

}