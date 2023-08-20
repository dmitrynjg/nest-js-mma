import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Fighter } from 'src/modules/fighters/fighters/entities/fighter.entity';
import { Event } from 'src/modules/events/entities/event.entity';
import { FightStatus } from './fight-status.entity';

@Entity({ name: 'fights' })
export class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.fights)
  event: Event;

  @ManyToOne(() => Fighter, (fighter) => fighter.fights)
  firstСombatant: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.fights)
  secondСombatant: Fighter;

  @Column({
    nullable: true,
    type: 'boolean',
  })
  isWinFirstСombatant: boolean;

  @Column({
    default: null,
    nullable: true,
    type: 'integer',
  })
  totalRounds: number;

  @ManyToOne(() => FightStatus, (fight) => fight.fights)
  status: FightStatus;

  @Column({ nullable: true })
  totalTime: string;

  @Column({ nullable: true })
  date: Date;
}
