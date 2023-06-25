import bodyParser from "body-parser";
import express from "express";

import { courseRouter } from "./course/infrastructure/CourseRoutes";

// import { userRouter } from "./user/infrastructure/UserRoutes";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// app.use("/health", healthRouter);
app.use("/course", courseRouter);

app.use("/public", express.static("imgs"));
app.get("/", function (req, res) {
  res.send("Esta es la API de la entidad curso de el proeycto instrumaster");
});

app.listen(PORT, () => {
  console.log(`[APP] - Starting application on port ${PORT}`);
});
