import { Response } from 'express';
import { CourseCreateDto } from '../dto/models/courses-create.dto';
import { CourseIndvRequestDto } from '../dto/request/course-ind.dto';
import { CourseLessonGetRequestDto } from '../dto/request/course-lesson-get-dto';
import { CourseLessonsGetRequestDto } from '../dto/request/course-lessons-get-dto';
export declare class CoursesController {
    private readonly _courseService;
    register(courserRegistrationDto: CourseCreateDto, res: Response): Promise<any>;
    addCourse(courserRegistrationDto: CourseIndvRequestDto, res: Response): Promise<any>;
    getListLesson(courserRegistrationDto: CourseLessonGetRequestDto, res: Response): Promise<any>;
    getListLessons(courserRegistrationDto: CourseLessonsGetRequestDto, res: Response): Promise<any>;
}
