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
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_constant_1 = require("../../../common/constants/response.constant");
const http_response_dto_1 = require("../../../common/dtos/http-response.dto");
const guards_1 = require("../../auth/guards");
const courses_create_dto_1 = require("../dto/models/courses-create.dto");
const course_ind_dto_1 = require("../dto/request/course-ind.dto");
const course_lesson_get_dto_1 = require("../dto/request/course-lesson-get-dto");
const course_lessons_get_dto_1 = require("../dto/request/course-lessons-get-dto");
const courses_service_1 = require("../services/courses.service");
let CoursesController = class CoursesController {
    async register(courserRegistrationDto, res) {
        const resultAdded = await this._courseService.createCourseMaster(courserRegistrationDto);
        res
            .status(common_1.HttpStatus.OK)
            .json({
            [response_constant_1.responseKey.STATUS]: response_constant_1.ResponseCode.SUCCESS_CODE,
            [response_constant_1.responseKey.MESSAGE]: response_constant_1.ResponseName.SUCCESS,
            [response_constant_1.responseKey.DATA]: resultAdded,
        })
            .send();
    }
    async addCourse(courserRegistrationDto, res) {
        await this._courseService.addSubCourse(courserRegistrationDto);
        res
            .status(common_1.HttpStatus.OK)
            .json({
            [response_constant_1.responseKey.STATUS]: response_constant_1.ResponseCode.SUCCESS_CODE,
            [response_constant_1.responseKey.MESSAGE]: response_constant_1.ResponseName.SUCCESS,
        })
            .send();
    }
    async getListLesson(courserRegistrationDto, res) {
        const resultLessons = await this._courseService.getListLesson(courserRegistrationDto);
        res
            .status(common_1.HttpStatus.OK)
            .json({
            [response_constant_1.responseKey.STATUS]: response_constant_1.ResponseCode.SUCCESS_CODE,
            [response_constant_1.responseKey.MESSAGE]: response_constant_1.ResponseName.SUCCESS,
            [response_constant_1.responseKey.DATA]: resultLessons,
        })
            .send();
    }
    async getListLessons(courserRegistrationDto, res) {
        const resultLessons = await this._courseService.getListLessons(courserRegistrationDto);
        res
            .status(common_1.HttpStatus.OK)
            .json({
            [response_constant_1.responseKey.STATUS]: response_constant_1.ResponseCode.SUCCESS_CODE,
            [response_constant_1.responseKey.MESSAGE]: response_constant_1.ResponseName.SUCCESS,
            [response_constant_1.responseKey.DATA]: resultLessons,
        })
            .send();
    }
};
__decorate([
    (0, common_1.Inject)(courses_service_1.CourseService),
    __metadata("design:type", courses_service_1.CourseService)
], CoursesController.prototype, "_courseService", void 0);
__decorate([
    (0, common_1.Post)('createMasterCourse'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully Registered Course',
        status: common_1.HttpStatus.OK,
        type: http_response_dto_1.SuccessResponse,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Registers a new course' }),
    (0, common_1.UseGuards)(guards_1.JwtAccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [courses_create_dto_1.CourseCreateDto, Object]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('addSubCourse'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully Registered',
        status: common_1.HttpStatus.OK,
        type: http_response_dto_1.SuccessResponse,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Registers a new lesson into a course' }),
    (0, common_1.UseGuards)(guards_1.JwtAccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_ind_dto_1.CourseIndvRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "addCourse", null);
__decorate([
    (0, common_1.Post)('getListLesson'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully Registered',
        status: common_1.HttpStatus.OK,
        type: http_response_dto_1.SuccessResponse,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'retrieves a complete list about all the courses' }),
    (0, common_1.UseGuards)(guards_1.JwtAccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_lesson_get_dto_1.CourseLessonGetRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "getListLesson", null);
__decorate([
    (0, common_1.Post)('getListLessons'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successfully Registered',
        status: common_1.HttpStatus.OK,
        type: http_response_dto_1.SuccessResponse,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'retrieves a complete list about all the courses' }),
    (0, common_1.UseGuards)(guards_1.JwtAccessTokenGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_lessons_get_dto_1.CourseLessonsGetRequestDto, Object]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "getListLessons", null);
CoursesController = __decorate([
    (0, common_1.Controller)({ path: 'courses', version: '1' }),
    (0, swagger_1.ApiTags)('courses'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor)
], CoursesController);
exports.CoursesController = CoursesController;
//# sourceMappingURL=courses.controller.js.map