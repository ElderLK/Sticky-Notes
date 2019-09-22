import * as Sequelize from "sequelize";
import { SequelizeAttributes } from "../typings/SequelizeAttributes";

export interface TaskAttributes {
  id?: number;
  name: string;
  description: string;
  status: "draft" | "done" | "undone" | "deleted" | "delayed";
  dueAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | number | null;
}

export interface TaskInstance
  extends Sequelize.Instance<TaskAttributes>,
    TaskAttributes {}

export const taskFactory = (
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
): Sequelize.Model<TaskInstance, TaskAttributes> => {
  const attributes: SequelizeAttributes<TaskAttributes> = {
    name: {
      type: dataTypes.STRING
    },
    description: {
      type: dataTypes.TEXT
    },
    status: {
      type: dataTypes.STRING
    },
    dueAt: {
      type: dataTypes.DATE
    }
  };

  const task = sequelize.define<TaskInstance, TaskAttributes>(
    "task",
    attributes
  );

  /*task.associate = models => {
    task.belongsTo(models.Address, { onDelete: "Cascade" });
  };*/

  return task;
};
