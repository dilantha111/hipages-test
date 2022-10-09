import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

class Suburb extends Model {
  public id!: number;
  public name!: string;
  public postcode!: string;
}

Suburb.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'suburbs',
  }
);

export default Suburb;
