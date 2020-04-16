'use strict';

import { Database } from './mongo-database';
import { MyServer } from './myserver';

const theDatabase = new Database('jcdaniels');
const theServer = new MyServer(theDatabase);

theServer.listen(8080);