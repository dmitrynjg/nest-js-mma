import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Fight } from './fight.entity';

@Entity({ name: 'fight-status' })
export class FightStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Fight)
  @JoinTable()
  fights: Fight[];
}
