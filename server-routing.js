"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var http = require('http');
var url = require('url');
var express = require('express');
var formidable = require('formidable');
var fs = require('fs');
/*
const exprss = require("express");
const upload = require("express-fileupload")
const file = express();notes
*/
var MyServer = /** @class */ (function () {
    function MyServer(db) {
        var _this = this;
        // Server stuff: use express instead of http.createServer
        this.server = express();
        this.port = 8080;
        this.router = express.Router();
        this.theDatabase = db;
        // from https://enable-cors.org/server_expressjs.html
        this.router.use(function (request, response, next) {
            response.header('Content-Type', 'application/json');
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Headers', '*');
            next();
        });
        // Serve static pages from a particular path.
        this.server.use(express.static(__dirname + '/html'));
        this.server.use(express.json());
        //Handle CREATE operation
        this.router.post('/users/:userId/create', this.createSightingHandler.bind(this));
        this.router.post('/users/:userId/createLogin', this.createLoginHandler.bind(this));
        this.router.post('/users/:userId/view', [this.errorHandler.bind(this), this.viewSightingHandler.bind(this)]);
        this.router.post('/users/:userId/delete', [this.errorHandler.bind(this), this.deleteSightingHandler.bind(this)]);
        this.router.post('/photoSub', this.createPhotoHandler.bind(this));
        this.router.post('/users/:userId/edit', [this.errorHandler.bind(this), this.editSightingsHandler.bind(this)]);
        //this.router.get('/getImage', this.getImageHandler.bind(this)); Again server will not run correctly with these in as they reference handlers that do no actually have a function tied to them so commenting them out for release of milestone 2
        //this.router.get('/postImage', this.postImageHandler.bind(this));
        this.router.post('*', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                response.send(JSON.stringify({ "result": "command-not-found" }));
                return [2 /*return*/];
            });
        }); });
        // Start up the counter endpoint at '/counter'.
        //start
        this.server.use('/nature', this.router);
    }
    MyServer.prototype.errorHandler = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.theDatabase.isFound(request.params['userId'] + "-" + request.body.name)];
                    case 1:
                        value = _a.sent();
                        if (!value) {
                            response.write(JSON.stringify({ 'result': 'error' }));
                            response.end();
                        }
                        else {
                            next();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyServer.prototype.createSightingHandler = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createSighting(request.params['userId'] + "-" + request.body.name, request.body.species, request.body.date, request.body.time, request.body.location, request.body.latitude, request.body.longitude, request.body.gender, request.body.size, request.body.amount, response)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyServer.prototype.viewSightingHandler = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewSighting(request.params['userId'] + "-" + request.body.name, response)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ///photo sub
    MyServer.prototype.createPhotoHandler = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createPhoto(request.body.title, request.body.species, request.body.file, response)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //edit sighting
    MyServer.prototype.editSightingsHandler = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editsSighting(request.params['userId'] + "-" + request.body.name, request.body.species, request.body.date, request.body.time, request.body.location, request.body.latitude, request.body.longitude, request.body.gender, request.body.size, request.body.amount, response)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyServer.prototype.deleteSightingHandler = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteSighting(request.params['userId'] + "-" + request.body.name, response)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyServer.prototype.createLoginHandler = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createLogin(request.params['userId'] + "-" + request.body.name, request.body.password, request.body.email, response)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Not sure why this handler is handling a handler - breaks the code when run so commenting it out for milestone 2 release
    private async getImageHandler(request, response) : Promise<void> {
    await this.getImageHandler(request.query.species, response);
    }
    
    private async postImageHandler(request, response) : Promise<void> {
    await this.postImageHander(request.query.species, response);
    }
    */
    MyServer.prototype.listen = function (port) {
        this.server.listen(port);
    };
    //private async createSighting(species: string, date: Date, time: number, Lat: number, Long: number, gender: string, size: number, amt : number, response): Promise<void> {
    //	}
    //Photo Submission
    MyServer.prototype.createPhoto = function (title, species, file, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("creating sighting entry for '" + species + "'");
                        return [4 /*yield*/, this.theDatabase.putSighting(title, species, file)];
                    case 1:
                        _a.sent();
                        response.write(JSON.stringify({ 'result': 'created',
                            'title': title,
                            'species': species,
                            'file': File
                        }));
                        response.end();
                        return [2 /*return*/];
                }
            });
        });
    };
    //
    MyServer.prototype.createSighting = function (name, species, date, time, location, latitude, longitude, gender, size, amount, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("creating sighting entry for '" + species + "'");
                        return [4 /*yield*/, this.theDatabase.putSighting(name, species, date, time, location, latitude, longitude, gender, size, amount)];
                    case 1:
                        _a.sent();
                        response.write(JSON.stringify({ 'result': 'created',
                            'name': name,
                            'species': species,
                            'date': date,
                            'time': time,
                            'location': location,
                            'latitude': latitude,
                            'longitude': longitude,
                            'gender': gender,
                            'size': size,
                            'amount': amount
                        }));
                        response.end();
                        return [2 /*return*/];
                }
            });
        });
    };
    //edit submission sight
    MyServer.prototype.editsSighting = function (name, species, date, time, loc, latitude, long, gender, size, amount, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing sighting entry for '" + species + "'");
                        return [4 /*yield*/, this.theDatabase.editsSighting(name, species, date, time, loc, latitude, long, gender, size, amount)];
                    case 1:
                        _a.sent();
                        response.write(JSON.stringify({ 'result': 'updated',
                            'name': name,
                            'species': species,
                            'Date': date,
                            'Time': time,
                            'location': loc,
                            'latitude': latitude,
                            'longitude': long,
                            'gender': gender,
                            'size': size,
                            'amount': amount
                        }));
                        response.end();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyServer.prototype.errorCounter = function (name, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                response.write(JSON.stringify({ 'result': 'error' }));
                response.end();
                return [2 /*return*/];
            });
        });
    };
    // public async editSighting(species: string, date: Date, time: Date, loc: string, latitude: number, long: number, gender: string, size: number, amount: number, response) : Promise<void> {
    // console.log("Editing sighting entry for '" + species + "'");
    // await this.theDatabase.editSighting(species, date, time, loc, latitude, long, gender, size, amount);
    // response.write(JSON.stringify({'species' : species,
    // 								'Date' : date,
    // 								'Time' : time,
    // 								'location' : loc,
    // 								'Latitude' : latitude,
    // 								'Longitude' : long,
    // 								'Gender' : gender,
    // 								'Size' : size,
    // 								'Amount Seen' : amount					
    // 							}));
    // response.end();
    // }
    MyServer.prototype.viewSighting = function (name, response) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.theDatabase.getSighting(name)];
                    case 1:
                        value = _a.sent();
                        response.write(JSON.stringify({ 'result': 'read',
                            'name': name,
                            'species': value.species,
                            'date': value.date,
                            'time': value.time,
                            'location': value.location,
                            'latitude': value.latitude,
                            'longitude': value.longitude,
                            'gender': value.gender,
                            'size': value.size,
                            'amount': value.amount
                        }));
                        response.end();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyServer.prototype.deleteSighting = function (name, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.theDatabase.delSighting(name)];
                    case 1:
                        _a.sent();
                        response.write(JSON.stringify({ 'result': 'deleted',
                            'value': name }));
                        response.end();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyServer.prototype.createLogin = function (name, password, email, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.theDatabase.newUser(name, password, email)];
                    case 1:
                        _a.sent();
                        response.write(JSON.stringify({ 'result': 'created',
                            'name': name,
                            'email': email }));
                        response.end();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MyServer;
}());
exports.MyServer = MyServer;
