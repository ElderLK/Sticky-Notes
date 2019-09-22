/**
 * Recupera uma variável de ambiente ou dispara um erro se ela não
 * está definida
 * @param name [string] nome da variável de ambiente
 * @returns [string] valor da variável de ambiente
 */
function getFromEnv(name: string): string {
  // if (!process.env[name]) throw Error(`Required env ${name}`);
  return process.env[name] as string;
}

export default function config() {
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      `-> Loading environment from .env file (env: ${process.env.NODE_ENV})`
    );
    require("dotenv").load();
  }

  return {
    database: {
      database: getFromEnv("DATABASE_NAME"),
      username: getFromEnv("DATABASE_USERNAME"),
      password: getFromEnv("DATABASE_PASSWORD"),
      params: {
        host: getFromEnv("DATABASE_HOST"),
        dialect: "mysql",
        // operatorsAliases: false,
        define: {
          charset: "utf8",
          collate: "utf8_general_ci",
          //   freezeTableName: true,
          underscored: true,
          timestamps: true,
          paranoid: true // soft deleting
        }
      }
    }
  };
}
