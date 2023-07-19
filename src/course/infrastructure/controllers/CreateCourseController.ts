import { Request, Response } from "express";

import { CreateCourseUseCase } from "../../application/CreateCourseUseCase";
import { Course } from "../../domain/Course";

export class CreateCourseController {
  constructor(readonly createCourseUseCase: CreateCourseUseCase) {}

  async run(req: Request, res: Response) {
    const course = req.body;
    const courseCreated = await this.createCourseUseCase.run(
      new Course("1", course.course_name, course.course_logo)
    );
    console.log(courseCreated);
    return res.status(200).json({
      message: "Nuevo curso añadido",
      data: {
        course_name: course.course_name,
        course_logo: course.course_logo,
      },
    });
  }
}
