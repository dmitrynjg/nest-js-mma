import { Nationality } from '../../nationality/entity/nationality.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Weight } from '../../weights/entity/weight.entity';
import { Fight } from 'src/modules/fights/entities/fight.entity';

@Entity({ name: 'fighter' })
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  surname: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: false, type: 'float' })
  height: number;

  @Column({ default: 0, type: 'integer' })
  wins: number;

  @Column({ default: 0, type: 'integer' })
  losses: number;

  @Column({ default: 0, type: 'integer' })
  draws: number;

  @Column({ default: 0, type: 'integer' })
  knockouts: number;

  @Column({ nullable: false, name: 'birthday', type: 'date' })
  dateBirthday: Date;

  @ManyToMany(() => Fight)
  @JoinTable()
  fights: Fight[];

  @ManyToOne(() => Nationality, (nationality) => nationality.fighters)
  nationality: Nationality;

  @ManyToOne(() => Weight, (weight) => weight.fighters)
  weight: Weight;

  // @ManyToMany(() => Fight)
  // @JoinTable()
  // fightsHistory: FighterFightsHistory[];
}
