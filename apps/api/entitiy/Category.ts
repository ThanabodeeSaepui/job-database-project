import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column("text")
  category_name: string;
}
