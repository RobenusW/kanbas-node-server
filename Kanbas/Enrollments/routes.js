import * as enrollmentDao from "./dao.js";
export default function enrollmentRoutes(app) {
  app.delete("/api/enrollment/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentDao.unEnrollUserInCourse(userId, courseId);
    res.send(status);
  });
  app.put("/api/enrollment/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentDao.enrollUserInCourse(userId, courseId);
    res.send(status);
  });
}
