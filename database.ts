import { response } from "express/lib/express";

export class Database {

    private MongoClient = require('mongodb').MongoClient;
    private dbURL: string;
    private db: any;

    