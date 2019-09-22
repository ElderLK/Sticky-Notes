import express from "express";
import db from "../db";
import { TaskInstance } from "../models/Task";

const taskRouter = express.Router();

taskRouter
  .route("/tasks/:taskId")
  .get(async (req, res) => {
    db.Task.findById(req.params.taskId)
      .then((tasks: TaskInstance | null) => res.status(200).json(tasks))
      .catch(err => res.status(500).json({ err: ["oops", err] }));
  })
  .patch(async (req, res) => {
    db.Task.update(req.body, { where: { id: req.params.taskId } })
      .then((tasks: [number, TaskInstance[]]) => res.status(200).json(tasks))
      .catch((err: any) => res.status(500).json({ err: ["oops", err] }));
  })
  .delete(async (req, res) => {
    db.Task.destroy({ where: { id: req.params.taskId } })
      .then((retorno: number) => res.status(200).json(retorno))
      .catch(err => res.status(500).json({ err: ["oops", err] }));
  });

taskRouter.route("/tasks/:taskId/restore").patch(async (req, res) => {
  db.Task.findById(req.params.taskId, { paranoid: false })
    .then(async (tasks: TaskInstance | null) => {
      let restore = "not found" as any;
      if (tasks) {
        restore = await tasks.restore();
      }
      return res.status(200).json(restore);
    })
    .catch(err => res.status(500).json({ err: ["oops", err] }));
});

taskRouter
  .route("/tasks")
  .get(async (_, res) => {
    db.Task.findAll({ paranoid: false })
      .then((tasks: TaskInstance[]) => res.status(200).json(tasks))
      .catch(err => res.status(500).json({ err: ["oops", err] }));
  })
  .post(async (req, res) => {
    db.Task.create(req.body)
      .then((tasks: TaskInstance | null) => res.status(200).json(tasks))
      .catch(err => res.status(500).json({ err: ["oops", err] }));
  });

export default taskRouter;
