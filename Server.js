'use strict';
exports.__esModule = true;
var database_1 = require("./database");
var server_routing_1 = require("./server-routing");
var theDatabase = new database_1.Database('Sightings'); // CHANGE THIS
var theServer = new server_routing_1.MyServer(theDatabase);
theServer.listen(process.env.PORT);
