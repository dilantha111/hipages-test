import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import Category from './Category';
import Suburb from './Suburb';

class Job extends Model {
  public id!: number;
  public status!: string;
  public contactName!: string;
  public contactPhone!: string;
  public contactEmail!: string;
  public price!: string;
  public description!: string;

  // timestamps!
  public readonly createdAt!: string;
  public readonly updatedAt!: string;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'contact_name',
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'contact_phone',
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'contact_email',
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: 'TIMESTAMP',
      field: 'created_at',
    },
    updatedAt: {
      type: 'TIMESTAMP',
      field: 'updated_at',
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'jobs',
  }
);

Job.belongsTo(Suburb, {
  onUpdate: 'RESTRICT',
  onDelete: 'RESTRICT',
  foreignKey: 'suburb_id',
  targetKey: 'id',
});
Job.belongsTo(Category, {
  onUpdate: 'RESTRICT',
  onDelete: 'RESTRICT',
  foreignKey: 'category_id',
  targetKey: 'id',
});

export default Job;
