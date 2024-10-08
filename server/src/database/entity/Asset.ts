import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { AssetTemplate } from "./AssetTemplate";

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => AssetTemplate, { nullable: false })
  template_id: AssetTemplate;

  @ManyToOne(() => User, { nullable: true })
  created_by: User;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  last_updated_at: Date;

  @Column({ type: "json", nullable: true })
  data: any;
}
