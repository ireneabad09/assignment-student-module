"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
var typeorm_1 = require("typeorm");
var student_entity_1 = require("./student.entity");
var Assignment = /** @class */ (function () {
    function Assignment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Assignment.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Assignment.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Assignment.prototype, "dueDate", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return student_entity_1.Student; }, function (student) { return student.assignments; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", student_entity_1.Student)
    ], Assignment.prototype, "student", void 0);
    Assignment = __decorate([
        (0, typeorm_1.Entity)()
    ], Assignment);
    return Assignment;
}());
exports.Assignment = Assignment;
