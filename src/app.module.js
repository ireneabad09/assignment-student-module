"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var student_module_1 = require("./student/student.module");
var student_entity_1 = require("./student/student.entity");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql', // Change to your database type (e.g., 'postgres')
                    host: 'localhost',
                    port: 3306, // Default port for MySQL
                    username: 'your_username', // Replace with your DB username
                    password: 'your_password', // Replace with your DB password
                    database: 'student_db', // Replace with your database name
                    entities: [student_entity_1.Student],
                    synchronize: true, // Auto-create tables; set to false in production
                }),
                student_module_1.StudentModule,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
