import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "micro_samples" })
export class MicroSampleEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  username: string;

  @Column({
    type: 'bytea',
  })
  image?: Uint8Array;

  @Column({ nullable: true })
  sample_qty?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(username: string, image: Uint8Array, sample_qty: string) {
    super();

    this.username = username;
    this.image = image;
    this.sample_qty = sample_qty;
  }
}
