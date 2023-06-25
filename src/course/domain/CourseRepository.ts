import { Course } from "./Course";

export interface CourseRepository {
  createCourse(course: Course): Promise<Course | null>;
  getCourseById(id: string): Promise<Course | null>;
  getAllCourses(): Promise<Course[] | null>;
}
