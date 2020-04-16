import { resolve } from "dns";
let http = require('http');
let url = require('url');

export class MyServer {
    private server;
    private theDatabase;
    private headerText = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    };
    constructor(db) {
        this.server = http.createServer();
        this.theDatabase = db;
        this.server.on('request', this.handler.bind(this));    
    }

    public async handler(request, response) : Promise<void> {
        response.writeHead(200, this.headerText);
        let options = url.parse(request.url, true).query;
        if (request.url.startsWith("/create")) {
            await this.createEntry(options.name, response)
            return
        }

    }


    public listen(port) : void {
        this.server.listen(port);
    }

    public async createEntry(name: string, response) : Promise<void> {

    response.end();
    }










}