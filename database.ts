export class Database {

    private MongoClient = require('mongodb').MongoClient;
	private uri;
    private client;
    private collectionName : string;
	private dbName : string = "csTesting";

	constructor(collectionName) {
		let secrets;
		let password;
		if (!process.env.PASSWORD) {
		secrets = require('./secrets.json');
		password = secrets.password;
		} else {
			password = process.env.PASSWORD;
		}
		this.uri = password;
		console.log(this.uri)
    	this.collectionName = collectionName;
    	this.client = new this.MongoClient(this.uri, { useNewUrlParser: true });

	// Open up a connection to the client.
	// Open up a connection to the client.
	// The connection is asynchronous, but we can't call await directly
	// in the constructor, which cannot be async. So, we use "IIFE". Explanation below.
	
	/* from https://anthonychu.ca/post/async-await-typescript-nodejs/

	  Async/Await and the Async IIFE

	  The await keyword can only be used inside of a function
	  marked with the async keyword. [...] One way to do this is
	  with an "async IIFE" (immediately invoked function
	  expression)...

	   (async () => {
	   // code goes here
	   })();

	*/
	(async () => {
	    await this.client.connect().catch(err => { console.log(err); });
	})();
	}
	
	/*
    public async put(key: string, value: string) : Promise<void> {
	let db = this.client.db(this.dbName);
	let collection = db.collection(this.collectionName);
	console.log("put: key = " + key + ", value = " + value);
	let result = await collection.updateOne({'name' : key}, { $set : { 'value' : value} }, { 'upsert' : true } );
	console.log("result = " + result);
	}
	*/

	public async putSighting(key: string, species: string, date: Date, time: Date, location: string, latitude: number, longitude: number, gender: string, size: number, amount: number) : Promise<void> {
	let db = this.client.db(this.dbName);
	let collection = db.collection(this.collectionName);
	console.log("put: species = " + species);
	let result = await collection.updateOne({'name': key}, {$set: {'species' : species, 'date' : date, 'time' : time, 'location' : location, 'latitude' : latitude, 'longitude' : longitude, 'gender' : gender, 'size' : size, 'amount' : amount}}, {'upsert' : true } );
	}

	//similar to put sighting but upsert is turned off so it will not automatically create new document if there is no sighting for the species in the database
	public async editSighting(species: string, date: Date, time: Date, loc: string, latitude: number, long: number, gender: string, size: number, amount: number) : Promise<void> {
	let db = this.client.db(this.dbName);
	let collection = db.collection(this.collectionName);
	console.log("put: species = " + species);
	let result = await collection.updateOne({ 'species' : species}, {$set: {'date' : date, 'time' : time, 'location' : loc, 'latitude' : latitude, 'longitude' : long, 'gender' : gender, 'size' : size, 'amount' : amount}}, {'upsert' : false } );
	}
	
	//
    public async getSighting(key: string) : Promise<string> {
	let db = this.client.db(this.dbName); // this.level(this.dbFile);
	let collection = db.collection(this.collectionName);
	console.log("get: key = " + key);
	let result = await collection.findOne({'name' : key });
	console.log("get: returned " + JSON.stringify(result))
	if (result) {
		return result;
	} else {
	     return null;
	}
    }
	//photo submission
	public async putPhoto(title: string, species: string, file : File, response) : Promise<void> {
		let db = this.client.db(this.dbName);
		let collection = db.collection(this.collectionName);
	}
	/*	
	public async putPhoto(title: string, species: string, file : File, response)) : Promise<void> {
		let db = this.client.db(this.dbName);
		let collection = db.collection(this.collectionName);
		console.log("put: species = " + species);
		let result = await collection.updateOne({'name': key}, {$set: {'species' : species, 'date' : date, 'time' : time, 'location' : location, 'latitude' : latitude, 'longitude' : longitude, 'gender' : gender, 'size' : size, 'amount' : amount}}, {'upsert' : true } );
		}

	*/

    public async delSighting(key: string) : Promise<void> {
		let db = this.client.db(this.dbName);
		let collection = db.collection(this.collectionName);
		console.log("delete: key = " + key);
		let result = await collection.deleteOne({'name' : key });
		console.log("result = " + result);
    }
    
    public async isFound(key: string) : Promise<boolean>  {
	console.log("isFound: key = " + key);
	let v = await this.getSighting(key);
	console.log("is found result = " + v);
	if (v === null) {
	    return false;
	} else {
	    return true;
	}
    }
}