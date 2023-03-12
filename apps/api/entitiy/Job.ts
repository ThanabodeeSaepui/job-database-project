import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Category from "./Category";
import Company from "./Company";

@Entity()
export default class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  job_name: string;

  @Column("text")
  job_description: string;

  @Column("integer")
  avail_seat: number;

  @ManyToOne(() => Category, (category) => category.Jobs)
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Company, (company) => company.Jobs)
  @JoinColumn()
  company: Company;
}
