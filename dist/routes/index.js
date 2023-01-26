"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require('fastify');
const datasource_1 = require("./datasource");
const controller = __importStar(require("../controllers/todo"));
const dotenv_1 = require("dotenv");
const envfile = `.env.${process.env.NODE_ENV}`;
const envdir = process.cwd();
(0, dotenv_1.config)({ path: `${envdir}/${envfile}` });
datasource_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    const app = fastify();
    app.get('/', controller.findAll);
    app.post('/', controller.create);
    app.get('/:id', controller.findOne);
    app.put('/:id', controller.update);
    app.delete('/:id', controller.deleteOne);
    return app.listen({ port: 3002 }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server running on ${address}`);
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
