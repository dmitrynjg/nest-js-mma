import { Injectable } from '@nestjs/common';
import { Weight } from './entity/weight.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WeightService {
  constructor(
    @InjectRepository(Weight)
    private readonly weightRepository: Repository<Weight>,
  ) {}
  findAll() {
    return this.weightRepository.find();
  }
}
