import { config } from "dotenv";
import { Request, Response } from "express";

import { GetAllCoursesUseCase } from "../../application/GetAllCoursesUseCase";

config();
export class GetAllCoursesController {
  constructor(readonly getAllCoursesUseCase: GetAllCoursesUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const courses = await this.getAllCoursesUseCase.run();

      return res.status(200).json({
        message: "Lista de cursos obtenida correctamente",
        data: courses,
      });
    } catch (error) {
      console.error("Error al obtener la lista de cursos:", error);
      return res.status(500).json({
        message: "Error al obtener la lista de cursos",
      });
    }
  }
}
