import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Category from "./Category";
import Company from "./Company";

@Entity()
export default class Job {
  @PrimaryGeneratedColumn()
  job_id: number;

  @Column("text")
  job_name: string;

  @Column("text")
  job_description: string;

  @Column("integer")
  avail_seat: number;

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;

  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;
}
