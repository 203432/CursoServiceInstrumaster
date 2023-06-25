import { CourseRepository } from "../domain/CourseRepository";

export class GetAllCoursesUseCase {
  constructor(readonly courseRepository: CourseRepository) {}

  async run() {
    const courses = await this.courseRepository.getAllCourses();
    return courses;
  }
}
