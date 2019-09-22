import config from "../config/config";
import { createModels } from "../models";

const db = createModels(config().database);
db.sequelize.sync();

export default db;
