'use strict';

import { Database } from './database';
import { MyServer } from './server-routing';

const theDatabase = new Database('jcdaniels20'); // CHANGE THIS
const theServer = new MyServer(theDatabase);

theServer.listen(process.env.PORT)