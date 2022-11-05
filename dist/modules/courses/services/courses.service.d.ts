import { UserService } from 'src/modules/user/services';
import { Repository } from 'typeorm';
import { CourseCreateDto } from '../dto/models/courses-create.dto';
import { CourseIndvRequestDto } from '../dto/request/course-ind.dto';
import { CourseLessonGetRequestDto } from '../dto/request/course-lesson-get-dto';
import { CourseLessonsGetRequestDto } from '../dto/request/course-lessons-get-dto';
import { CourseMaster } from '../entities/course-master.entity';
import { CourseIndividual } from '../entities/course.entity';
export declare class CourseService {
    private readonly _courseMasterRepository;
    private readonly _courseIndividualRepository;
    private readonly _userService;
    constructor(_courseMasterRepository: Repository<CourseMaster>, _courseIndividualRepository: Repository<CourseIndividual>, _userService: UserService);
    createCourseMaster(courserRegistrationDto: CourseCreateDto): Promise<any>;
    addSubCourse(courserRegistrationDto: CourseIndvRequestDto): Promise<any>;
    getListLesson(courserRegistrationDto: CourseLessonGetRequestDto): Promise<any>;
    getListLessons(courserRegistrationDto: CourseLessonsGetRequestDto): Promise<any>;
}
