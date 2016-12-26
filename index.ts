import * as express from 'express';
import * as allRoutes from './routes'
import * as sockServer from './realtime'
import * as http from 'http'

var app = express();
var serv = http.createServer(app);
sockServer.init(serv)

app.set('view engine', 'pug')
allRoutes.init(app)

app.use(express.static("wwwroot"))
serv.listen(3000)