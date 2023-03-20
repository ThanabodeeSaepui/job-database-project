import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Job from "./Job";

@Entity()
export default class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  company_name: string;

  @Column("text")
  address: string;

  @Column("text")
  contact: string;

  @Column("text")
  description: string;

  @OneToMany(() => Job, (Job) => Job.company)
  Jobs: Job[];
}
