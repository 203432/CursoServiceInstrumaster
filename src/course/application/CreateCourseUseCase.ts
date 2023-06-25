import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";

export class CreateCourseUseCase {
  constructor(readonly courseRepository: CourseRepository) {}

  async run(course: Course) {
    await this.courseRepository.createCourse(course);
  }
}
