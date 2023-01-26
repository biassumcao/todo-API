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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.deleteOne = exports.update = exports.findOne = exports.create = void 0;
const todo_1 = __importDefault(require("../services/todo"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield todo_1.default.create(req.body);
    return res.status(200).send(response);
});
exports.create = create;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield todo_1.default.findOne(String(req.params.id));
    return res.status(200).send(response);
});
exports.findOne = findOne;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield todo_1.default.update(req.params.id, req.body.name);
    return res.status(200).send(response);
});
exports.update = update;
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield todo_1.default.delete(req.params.id);
    return res.status(200).send(response);
});
exports.deleteOne = deleteOne;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield todo_1.default.findAll();
    return res.status(200).send(response);
});
exports.findAll = findAll;
