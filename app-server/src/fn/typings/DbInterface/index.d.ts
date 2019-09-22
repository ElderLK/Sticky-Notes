import * as Sequelize from "sequelize";
import { TaskAttributes, TaskInstance } from "../../models/Task";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  Task: Sequelize.Model<TaskInstance, TaskAttributes>;
  [key: string]: any;
}
