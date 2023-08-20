import { Module } from '@nestjs/common';
import { Nationality } from './entity/nationality.entity';
import { NationalitySeeder } from './nationality.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NationalityController } from './nationality.controller';
import { NationalityService } from './nationality.service';

@Module({
  imports: [TypeOrmModule.forFeature([Nationality])],
  providers: [NationalitySeeder, NationalityService],
  controllers: [NationalityController],
})
export class NationalityModule {}
