import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FightStatus } from './entities/fight-status.entity';

@Injectable()
export class FightSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(FightStatus)
    private readonly fightStatusRepository: Repository<FightStatus>,
  ) {}

  async onModuleInit() {
    const list = (await this.fightStatusRepository.find()).map(
      (status) => status.name,
    );

    const sortList = [
      'knockout',
      'tko',
      'draw',
      'canceled',
      'disqualification',
    ].filter((name) => list.indexOf(name) === -1);

    if (sortList.length > 0) {
      const fightsEntities = sortList.map((name) => {
        const status = new FightStatus();
        status.name = name;
        return status;
      });

      await this.fightStatusRepository.save(fightsEntities);
    }
  }
}
