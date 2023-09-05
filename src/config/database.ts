import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "testContent",
  define: {
    timestamps: true,
  },
});

export default sequelize;
