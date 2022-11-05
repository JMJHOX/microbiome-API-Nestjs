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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const services_1 = require("../../user/services");
const typeorm_2 = require("typeorm");
const course_master_entity_1 = require("../entities/course-master.entity");
const course_entity_1 = require("../entities/course.entity");
let CourseService = class CourseService {
    constructor(_courseMasterRepository, _courseIndividualRepository, _userService) {
        this._courseMasterRepository = _courseMasterRepository;
        this._courseIndividualRepository = _courseIndividualRepository;
        this._userService = _userService;
    }
    async createCourseMaster(courserRegistrationDto) {
        const userSearch = {
            email: courserRegistrationDto.courseCollectionUserEmail,
        };
        const User = await this._userService.findUser(userSearch);
        const authorUser = User.firstName;
        const authorEmail = User.userAuth.email;
        const createdUser = Object.assign(Object.assign({}, courserRegistrationDto), { authorUser,
            authorEmail,
            User });
        return this._courseMasterRepository.save(createdUser);
    }
    async addSubCourse(courserRegistrationDto) {
        const createdUser = Object.assign({}, courserRegistrationDto);
        return this._courseIndividualRepository.save(createdUser);
    }
    async getListLesson(courserRegistrationDto) {
        return await this._courseIndividualRepository
            .createQueryBuilder('courses_lessons')
            .where('uuid = :id', { id: courserRegistrationDto.uuid_course })
            .execute();
    }
    async getListLessons(courserRegistrationDto) {
        return await this._courseIndividualRepository
            .createQueryBuilder('courses_lessons')
            .where('id_course = :id', { id: courserRegistrationDto.id_course })
            .execute();
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_master_entity_1.CourseMaster)),
    __param(1, (0, typeorm_1.InjectRepository)(course_entity_1.CourseIndividual)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        services_1.UserService])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=courses.service.js.map