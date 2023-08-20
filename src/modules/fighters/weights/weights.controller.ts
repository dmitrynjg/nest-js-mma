import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IWeight } from './types/weight';
import { WeightService } from './weights.service';

@Controller('weights')
export class WeightController {
  constructor(private readonly weightService: WeightService) {}
  @ApiOperation({ summary: 'List all Weight' })
  @ApiResponse({ status: 200, type: IWeight, isArray: true })
  @Get()
  findAll() {
    return this.weightService.findAll();
  }
}
