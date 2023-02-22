import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "micro_samples" })
export class MicroSampleEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  image_route_file?: string;

  @Column({ nullable: true })
  sample_qty?: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(username: string, image_route_file: string, sample_qty: number) {
    super();

    this.username = username;
    this.image_route_file = image_route_file;
    this.sample_qty = sample_qty;
  }
}
