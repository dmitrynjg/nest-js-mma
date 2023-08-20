import { Injectable, OnModuleInit } from '@nestjs/common';
import { Weight } from './entity/weight.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import nationalities from './weight-list/weight.list';

@Injectable()
export class WeightSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Weight)
    private readonly weightRepository: Repository<Weight>,
  ) {}

  async onModuleInit() {
    const listWeightByName = await (
      await this.weightRepository.find()
    ).map((weight) => weight.name);

    const sortList = nationalities.filter(
      (weight) => listWeightByName.indexOf(weight.name) === -1,
    );

    if (sortList.length > 0) {
      const weightEntities = nationalities.map((weightData) => {
        const weight = new Weight();
        weight.name = weightData.name;
        return weight;
      });

      await this.weightRepository.save(weightEntities);
    }
  }
}
