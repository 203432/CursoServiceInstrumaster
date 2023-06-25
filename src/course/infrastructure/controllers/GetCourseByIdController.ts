import { Request, Response } from "express";

import { GetCourseByIdUseCase } from "../../application/GetCourseByIdUseCase";
import { Course } from "../../domain/Course";

export class GetCourseByIdController {
  constructor(readonly getCourseByIdUseCase: GetCourseByIdUseCase) {}

  async run(req: Request, res: Response) {
    const courseId = req.params.id;
    const course: Course | null = await this.getCourseByIdUseCase.run(courseId);
    if (!course) {
      return res.status(400).json({
        message: "No existe este usuario",
      });
    }
    console.log(course?.id);
    const imageFromDB = course.course_logo;
    console.log(imageFromDB);
    const imageName = imageFromDB.split("\\").pop();
    const baseUrl = "http://localhost:3000/public/";
    const imageUrl = baseUrl + imageName;
    console.log(imageUrl);
    const encodedUrl = encodeURI(imageUrl);
    return res.status(200).json({
      message: "Usuario encontrado",
      data: {
        id: course?.id,
        course_name: course?.course_name,
        course_logo: encodedUrl,
      },
    });
  }
}
