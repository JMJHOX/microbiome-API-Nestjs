import { BaseEntity } from 'typeorm';
import { CourseMaster } from './course-master.entity';
export declare class CourseIndividual extends BaseEntity {
    uuid: string;
    id_course: string;
    courseLessonName: string;
    courseLessonDesc: string;
    courseLessonContent1: object[];
    courseLessonContent2: string;
    courseLessonContent3: string;
    courseDuration: string;
    courseAuthor: CourseMaster;
    constructor(id_course: string, courseLessonName: string, courseDuration: string);
}
