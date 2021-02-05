require("dotenv").config();

module.exports = {
  development: {
    database: "google-oauth",
    use_env_variable: "DATABASE_DEV_URL",
    dialect: "postgres",
  },
  production: {
    database: "google-oauth",
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
