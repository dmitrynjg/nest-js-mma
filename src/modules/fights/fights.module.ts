import { Module, forwardRef } from '@nestjs/common';
import { FightsService } from './fights.service';
import { FightsController } from './fights.controller';
import { Fight } from './entities/fight.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from 'src/modules/fighters/fighters/entities/fighter.entity';
import { Event } from 'src/modules/events/entities/event.entity';
import { FightStatus } from './entities/fight-status.entity';
import { FightSeeder } from './fights.seeder';
import { FightersService } from 'src/modules/fighters/fighters/fighters.service';
import { Nationality } from 'src/modules/fighters/nationality/entity/nationality.entity';
import { Weight } from 'src/modules/fighters/weights/entity/weight.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Fight,
      Event,
      Fighter,
      Nationality,
      Weight,
      FightStatus,
    ]),
  ],
  controllers: [FightsController],
  providers: [FightSeeder, FightersService, FightsService],
})
export class FightsModule {}
