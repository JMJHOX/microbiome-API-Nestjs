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
exports.CourseCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CourseCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User pin code' }),
    __metadata("design:type", String)
], CourseCreateDto.prototype, "courseCollectionName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User pin code' }),
    __metadata("design:type", String)
], CourseCreateDto.prototype, "courseCollectionUserEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'rol user´s' }),
    __metadata("design:type", String)
], CourseCreateDto.prototype, "courseCollectionDesc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email address' }),
    __metadata("design:type", String)
], CourseCreateDto.prototype, "courseCollectionCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User last successful logged date' }),
    __metadata("design:type", String)
], CourseCreateDto.prototype, "courseCollectionReq", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User last failed logged date' }),
    __metadata("design:type", String)
], CourseCreateDto.prototype, "courseCollectionRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User last logout date' }),
    __metadata("design:type", String)
], CourseCreateDto.prototype, "courseCollectionIdiom", void 0);
exports.CourseCreateDto = CourseCreateDto;
//# sourceMappingURL=courses-create.dto.js.map