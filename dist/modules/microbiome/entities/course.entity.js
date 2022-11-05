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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseIndividual = void 0;
const typeorm_1 = require("typeorm");
const course_master_entity_1 = require("./course-master.entity");
let CourseIndividual = class CourseIndividual extends typeorm_1.BaseEntity {
    constructor(id_course, courseLessonName, courseDuration) {
        super();
        this.courseLessonName = courseLessonName;
        this.courseDuration = courseDuration;
        this.id_course = id_course;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CourseIndividual.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseIndividual.prototype, "id_course", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseIndividual.prototype, "courseLessonName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseIndividual.prototype, "courseLessonDesc", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    __metadata("design:type", Array)
], CourseIndividual.prototype, "courseLessonContent1", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseIndividual.prototype, "courseLessonContent2", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseIndividual.prototype, "courseLessonContent3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseIndividual.prototype, "courseDuration", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_master_entity_1.CourseMaster, courseList => courseList.courseAuthor),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof course_master_entity_1.CourseMaster !== "undefined" && course_master_entity_1.CourseMaster) === "function" ? _a : Object)
], CourseIndividual.prototype, "courseAuthor", void 0);
CourseIndividual = __decorate([
    (0, typeorm_1.Entity)({ name: 'courses_lessons' }),
    __metadata("design:paramtypes", [String, String, String])
], CourseIndividual);
exports.CourseIndividual = CourseIndividual;
//# sourceMappingURL=course.entity.js.map