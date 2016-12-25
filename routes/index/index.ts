"use strict";

import * as express from "express";
import * as pug from "pug"

export class Index {
    public index(req: express.Request, res: express.Response) {
        res.send(pug.renderFile("routes/index/index.pug", {title: 'Hey', message: 'Hello there!' }))
    }
}
