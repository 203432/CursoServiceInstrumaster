import { config } from "dotenv";
import { Request, Response } from "express";

import { GetCourseByIdUseCase } from "../../application/GetCourseByIdUseCase";
import { Course } from "../../domain/Course";

config();
export class GetCourseByIdController {
  constructor(readonly getCourseByIdUseCase: GetCourseByIdUseCase) {}

  async run(req: Request, res: Response) {
    const courseId = req.params.id;
    const course: Course | null = await this.getCourseByIdUseCase.run(courseId);
    if (!course) {
      return res.status(400).json({
        message: "No existe este curso",
      });
    }

    return res.status(200).json({
      message: "Curso encontrado",
      data: {
        id: course?.id,
        course_name: course?.course_name,
        course_logo: course?.course_logo,
      },
    });
  }
}
