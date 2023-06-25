//Casos de uso
import { CreateCourseUseCase } from "../application/CreateCourseUseCase";
import { GetAllCoursesUseCase } from "../application/GetAllCoursesUseCase";
import { GetCourseByIdUseCase } from "../application/GetCourseByIdUseCase";
//Controladores
import { CreateCourseController } from "./controllers/CreateCourseController";
import { GetAllCoursesController } from "./controllers/GetAllCoursesController";
import { GetCourseByIdController } from "./controllers/GetCourseByIdController";
//repositorio
import { PostgresCourseRepository } from "./PostgresCourseRepository";

//Exportacion de repositorio
export const postgresCourseRepository = new PostgresCourseRepository();

//Create course
export const createCourseUseCase = new CreateCourseUseCase(
  postgresCourseRepository
);
export const createCourseController = new CreateCourseController(
  createCourseUseCase
);

//Get Course by Id
export const getCourseByIdUseCase = new GetCourseByIdUseCase(
  postgresCourseRepository
);
export const getCourseByIdController = new GetCourseByIdController(
  getCourseByIdUseCase
);

//Get All courses
export const getAllCoursesUseCase = new GetAllCoursesUseCase(
  postgresCourseRepository
);
export const getAllCoursesController = new GetAllCoursesController(
  getAllCoursesUseCase
);
