"use strict";

import * as express from "express";
import * as pug from "pug"

class Index {
    public index(req: express.Request, res: express.Response) {
        res.send(pug.renderFile("routes/index/index.pug", { title: 'Hey', message: 'Hello there!' }))
    }
}

export function register(app: express.Express) {
    var route = new Index();
    app.get("/", route.index)
}
