import { Fight } from 'src/modules/fights/entities/fight.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'event' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @OneToMany(() => Fight, (fight) => fight.event)
  fights: Fight[];

  @Column({ type: 'date' })
  date: Date;

  @Column({ nullable: false })
  location: string;

  @Column({ nullable: false })
  venue: string;

  @Column({ nullable: false })
  announcer: string;

  @Column({ nullable: false })
  tvAnnouncer: string;
}
