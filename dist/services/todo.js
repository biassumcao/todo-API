"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
const mongodb_1 = require("mongodb");
const datasource_1 = require("../routes/datasource");
class TodoService {
    constructor() {
        this.repository = datasource_1.AppDataSource.getRepository(todo_1.Todo);
    }
    create(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.save(todo);
                return response;
            }
            catch (e) {
                return e;
            }
        });
    }
    findOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.repository.findOneBy(_id);
            if (!todo)
                throw new Error(`Could not find referenced task`);
            return todo;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.repository.find();
            if (!tasks)
                throw new Error(`Could not find any task`);
            return tasks;
        });
    }
    update(_id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.updateOne({
                _id: new mongodb_1.ObjectID(_id),
            }, {
                $set: {
                    name,
                },
            });
            return this.findOne(_id);
        });
    }
    delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.findOne(_id);
            yield this.repository.deleteOne({ _id: new mongodb_1.ObjectID(_id) });
            return todo;
        });
    }
}
exports.default = new TodoService();
