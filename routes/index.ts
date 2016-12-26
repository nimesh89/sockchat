import * as express from "express";
import * as indexRoute from './index/index'

export function init(app: express.Express) {
    indexRoute.register(app);
}