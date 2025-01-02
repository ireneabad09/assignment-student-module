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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
var common_1 = require("@nestjs/common"); // Correct NestJS imports
var student_service_1 = require("./student.service"); // Import the StudentService
var create_student_dto_1 = require("./dto/create-student.dto"); // Import Create DTO
var update_student_dto_1 = require("./dto/update-student.dto"); // Import Update DTO
var StudentController = /** @class */ (function () {
    function StudentController(studentService) {
        this.studentService = studentService;
    }
    // Create a new student
    StudentController.prototype.create = function (createStudentDto) {
        return this.studentService.create(createStudentDto);
    };
    // Get all students
    StudentController.prototype.findAll = function () {
        return this.studentService.findAll();
    };
    // Get a specific student by ID
    StudentController.prototype.findOne = function (id) {
        return this.studentService.findOne(+id); // +id converts string to number
    };
    // Update a student's details
    StudentController.prototype.update = function (id, updateStudentDto) {
        return this.studentService.update(+id, updateStudentDto); // +id converts string to number
    };
    // Delete a student by ID
    StudentController.prototype.remove = function (id) {
        return this.studentService.remove(+id); // +id converts string to number
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
        __metadata("design:returntype", void 0)
    ], StudentController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StudentController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StudentController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
        __metadata("design:returntype", void 0)
    ], StudentController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], StudentController.prototype, "remove", null);
    StudentController = __decorate([
        (0, common_1.Controller)('students') // Base route: /students
        ,
        __metadata("design:paramtypes", [student_service_1.StudentService])
    ], StudentController);
    return StudentController;
}());
exports.StudentController = StudentController;
