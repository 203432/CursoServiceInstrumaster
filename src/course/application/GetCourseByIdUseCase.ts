import { CourseRepository } from "../domain/CourseRepository";

export class GetCourseByIdUseCase {
  constructor(readonly courseRepository: CourseRepository) {}

  async run(id: string) {
    const course = await this.courseRepository.getCourseById(id);
    return course;
  }
}
