"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
let Todo = class Todo extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)({ type: 'uuid' })
], Todo.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false })
], Todo.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false })
], Todo.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool', nullable: false })
], Todo.prototype, "status", void 0);
Todo = __decorate([
    (0, typeorm_1.Entity)({ name: 'Todo' })
], Todo);
exports.Todo = Todo;
