import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Job from "./Job";

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  category_name: string;

  @OneToMany(() => Job, (Job) => Job.category)
  Jobs: Job[];
}
