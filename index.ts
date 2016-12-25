import * as express from 'express';
import * as indexRoute from './routes/index'

var app = express();
app.set('view engine', 'pug')
var route = new indexRoute.Index()
app.get("/", route.index)

app.listen(3000)