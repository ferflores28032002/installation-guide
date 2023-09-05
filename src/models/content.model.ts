import { DataTypes, Model } from "sequelize";

// connection
import db from "../config/database";

class content extends Model {
  public uid!: number;
  public title!: string;
  public description!: string;
}

content.init(
  {
    uid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "content",
    sequelize: db,
  }
);

export default content;
