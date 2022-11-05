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
exports.CourseIndvRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CourseIndvRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id of the main course' }),
    __metadata("design:type", String)
], CourseIndvRequestDto.prototype, "id_course", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the lesson' }),
    __metadata("design:type", String)
], CourseIndvRequestDto.prototype, "courseLessonName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the lesson' }),
    __metadata("design:type", String)
], CourseIndvRequestDto.prototype, "courseLessonDesc", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Content of the lesson part 1' }),
    __metadata("design:type", Array)
], CourseIndvRequestDto.prototype, "courseLessonContent1", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Content of the lesson part 2' }),
    __metadata("design:type", String)
], CourseIndvRequestDto.prototype, "courseLessonContent2", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Content of the lesson part 3' }),
    __metadata("design:type", String)
], CourseIndvRequestDto.prototype, "courseLessonContent3", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Duration of the course' }),
    __metadata("design:type", String)
], CourseIndvRequestDto.prototype, "courseDuration", void 0);
exports.CourseIndvRequestDto = CourseIndvRequestDto;
//# sourceMappingURL=course-ind.dto.js.map