import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Fighter } from '../../fighters/entities/fighter.entity';

@Entity({ name: 'nationality' })
export class Nationality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  code: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Fighter, (fighter) => fighter.nationality)
  fighters: Fighter[];
}
