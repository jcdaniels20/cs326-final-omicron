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

	this.router.get('/create', this.createSightingHandler.bind(this));

	this.server.use('/sighting', this.router);
}

private async errorHandler(request, response, next) : Promise<void> {

	}
	
private async createSightingHandler(request, response) {
await this.createSighting(request.query.species, response);
}

public listen(port) : void  {
	this.server.listen(port);
	}

//private async createSighting(species: string, date: Date, time: number, Lat: number, Long: number, gender: string, size: number, amt : number, response): Promise<void> {
 //	}

public async createSighting(species: string, response) : Promise<void> {
console.log("creating sighting entry for '" + species + "'");
await this.theDatabase.put(species, 0);
response.write(JSON.stringify({'result' : 'created',
							'Species' : species,
							'value' : 0}));
response.end();
}

}