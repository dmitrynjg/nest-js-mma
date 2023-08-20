import { Module } from '@nestjs/common';
import { FightersService } from './fighters.service';
import { FightersController } from './fighters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './entities/fighter.entity';
import { Weight } from '../weights/entity/weight.entity';
import { Nationality } from '../nationality/entity/nationality.entity';
import { Fight } from 'src/modules/fights/entities/fight.entity';
import { FightStatus } from 'src/modules/fights/entities/fight-status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Fighter,
      Weight,
      Nationality,
      Fight,
      FightStatus,
    ]),
  ],
  controllers: [FightersController],
  providers: [FightersService],
})
export class FightersModule {}
