exports.config = {
  HOST: "localhost",
  PORT: 1610,
  USER: "postgres", // Assuming this is a typo and should be "postgres"
  PASSWORD: "12345678",
  DB: "UserDB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};