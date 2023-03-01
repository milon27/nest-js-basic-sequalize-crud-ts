
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' })
export class UserModel extends Model {
    @Column({ field: 'id', type: DataType.BIGINT, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ field: 'first_name', type: DataType.STRING })
    firstName: string;

    @Column({ field: 'last_name', type: DataType.STRING })
    lastName: string;

    @Column({ defaultValue: true })
    isActive: boolean;
}

// connect this model in db.module.ts (will auto connect)