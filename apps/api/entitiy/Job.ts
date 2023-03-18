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

  @Column("text")
  avail_seat: string;

  @ManyToOne(() => Category, (category) => category.Jobs)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @ManyToOne(() => Company, (company) => company.Jobs)
  @JoinColumn({ name: "company_id" })
  company: Company;
}
