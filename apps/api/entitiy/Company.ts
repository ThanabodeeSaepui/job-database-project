import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Company {
  @PrimaryGeneratedColumn()
  company_id: number;

  @Column("text")
  company_name: string;

  @Column("text")
  address: string;

  @Column("text")
  contact: string;

  @Column("text")
  description: string;
}
