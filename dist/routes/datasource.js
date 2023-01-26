"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const todo_1 = require("../models/todo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    url: "mongodb://localhost:27017",
    host: "localhost",
    port: 27017,
    database: "Todo",
    entities: [todo_1.Todo],
    useUnifiedTopology: true
});
