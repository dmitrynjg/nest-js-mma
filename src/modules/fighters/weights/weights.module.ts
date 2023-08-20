import { Module } from '@nestjs/common';
import { Weight } from './entity/weight.entity';
import { WeightSeeder } from './weights.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeightController } from './weights.controller';
import { WeightService } from './weights.service';

@Module({
  imports: [TypeOrmModule.forFeature([Weight])],
  providers: [WeightSeeder, WeightService],
  controllers: [WeightController],
})
export class WeightModule {}
