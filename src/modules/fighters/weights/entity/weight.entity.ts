import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Fighter } from '../../fighters/entities/fighter.entity';

@Entity({ name: 'weight' })
export class Weight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Fighter, (fighter) => fighter.weight)
  fighters: Fighter[];
}
