import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NationalityService } from './nationality.service';
import { INationality } from './types/nationality';

@Controller('nationality')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {}
  @ApiOperation({ summary: 'List all Nationality' })
  @ApiResponse({ status: 200, type: INationality, isArray: true })
  @Get()
  findAll() {
    return this.nationalityService.findAll();
  }
}
