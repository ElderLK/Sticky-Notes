import sequelize from "sequelize";
import { DbInterface } from "../typings/DbInterface";
import { taskFactory } from "./Task";

export const createModels = (sequelizeConfig: any): DbInterface => {
  const { database, username, password, params } = sequelizeConfig;
  const sequelizeInstance = new sequelize(database, username, password, params);

  const db: DbInterface = {
    sequelize: sequelizeInstance,
    Sequelize: sequelize,
    Task: taskFactory(sequelizeInstance, sequelize)
  };

  return db;
};
