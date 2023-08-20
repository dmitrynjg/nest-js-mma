import { Injectable } from '@nestjs/common';
import { Nationality } from './entity/nationality.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NationalityService {
  constructor(
    @InjectRepository(Nationality)
    private readonly nationalityRepository: Repository<Nationality>,
  ) {}
  findAll() {
    return this.nationalityRepository.find();
  }
}
