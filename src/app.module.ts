import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { DatabaseModule } from './modules/database/database.module';
import { join } from 'path';
import { EventsModule } from './modules/events/events.module';
import { NationalityModule } from './modules/fighters/nationality/nationality.module';
import { FightersModule } from './modules/fighters/fighters/fighters.module';
import { WeightModule } from './modules/fighters/weights/weights.module';
import { FightsModule } from './modules/fights/fights.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(__dirname, '..', 'env', `${process.env.NODE_ENV}.env`),
      load: [configuration],
    }),
    DatabaseModule,
    FightersModule,
    EventsModule,
    FightsModule,
    NationalityModule,
    WeightModule,
  ],
})
export class AppModule {}
