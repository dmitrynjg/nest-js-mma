import { Injectable, OnModuleInit } from '@nestjs/common';
import { Nationality } from './entity/nationality.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import nationalities from './nationality-list/nationality.list';

@Injectable()
export class NationalitySeeder implements OnModuleInit {
  constructor(
    @InjectRepository(Nationality)
    private readonly nationalityRepository: Repository<Nationality>,
  ) {}

  async onModuleInit() {
    const listNationalityByName = await (
      await this.nationalityRepository.find()
    ).map((nationality) => nationality.name);

    const sortList = nationalities.filter(
      (nationality) => listNationalityByName.indexOf(nationality.name) === -1,
    );

    if (sortList.length > 0) {
      const nationalityEntities = sortList.map((nationalityData) => {
        const nationality = new Nationality();
        nationality.code = nationalityData.code;
        nationality.name = nationalityData.name;
        return nationality;
      });

      await this.nationalityRepository.save(nationalityEntities);
    }
  }
}
