import { Course } from "../domain/Course";
import { CourseRepository } from "../domain/CourseRepository";
import { pool } from "./postgres/database";

export class PostgresCourseRepository implements CourseRepository {
  async createCourse(course: Course): Promise<Course | null> {
    await pool.query(
      'INSERT INTO public."Course" (course_name, course_logo) VALUES ($1,$2)',
      [course.course_name, course.course_logo]
    );
    console.log(
      `nombre del curso:${course.course_name} url de la imagen:${course.course_logo}`
    );
    return course;
  }
  async getCourseById(id: string): Promise<Course | null> {
    console.log("Buscando el curso con id " + id);
    const query = await pool.query(
      'SELECT * FROM public."Course" WHERE id = $1',
      [id]
    );

    if (query.rows.length == 0) {
      return null;
    }

    const course: Course = query.rows[0];

    return course;
  }

  async getAllCourses(): Promise<Course[] | null> {
    try {
      const result = await pool.query('SELECT * FROM public."Course"');
      const courses = result.rows.map((row: any) => {
        return new Course(row.id, row.course_name, row.course_logo);
      });
      return courses;
    } catch (error) {
      console.error("Error al obtener todos los cursos:", error);
      return []; // En caso de error, devolver una lista vacía
    }
  }
}
