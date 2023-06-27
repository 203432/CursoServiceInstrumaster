import express from "express";

import upload from "../../libs/multer";
import {
  createCourseController,
  getAllCoursesController,
  getCourseByIdController,
} from "./dependecies";

export const courseRouter = express.Router();

//Crear curso route
courseRouter.post(
  "/",
  upload.single("course_logo"),
  createCourseController.run.bind(createCourseController)
);

//Obtener curso por id
courseRouter.get(
  "/id/:id",
  getCourseByIdController.run.bind(getCourseByIdController)
);

//Obtener todos los cursos
courseRouter.get(
  "/",
  getAllCoursesController.run.bind(getAllCoursesController)
);
