import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

class Category extends Model {
  public id!: number;
  public name!: string;
  public parentCategory!: string;
}

Category.init(
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
    parentCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'parent_category_id',
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'categories',
  }
);

export default Category;
