import { Request, Response } from "express";

import { CreateCourseUseCase } from "../../application/CreateCourseUseCase";
import { Course } from "../../domain/Course";

export class CreateCourseController {
  constructor(readonly createCourseUseCase: CreateCourseUseCase) {}

  async run(req: Request, res: Response) {
    const course = req.body;
    const image = req.file!.path;
    console.log(image);
    const courseCreated = await this.createCourseUseCase.run(
      new Course("1", course.course_name, image)
    );
    console.log(courseCreated);
    return res.status(200).json({
      message: "Nuevo curso añadido",
      data: {
        course_name: course.course_name,
        course_logo: image,
      },
    });
  }
}
