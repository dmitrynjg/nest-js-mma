import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Pagination } from 'src/lib/dto/pagination';
import { DeleteResponse } from 'src/lib/swagger/delete-response';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { FightersService } from './fighters.service';
import { IFighter, IFighterResponsePagination } from './types/fighters';

@Controller('fighters')
export class FightersController {
  constructor(private readonly fightersService: FightersService) {}
  @ApiOperation({ summary: 'Creating fighter' })
  @ApiResponse({
    status: 200,
    type: IFighter,
  })
  @Post()
  create(@Body() createFighterDto: CreateFighterDto) {
    return this.fightersService.create(createFighterDto);
  }

  @ApiOperation({ summary: 'Find list fighter' })
  @ApiResponse({
    status: 200,
    type: IFighterResponsePagination,
  })
  @Get()
  findAll(@Query() pagination: Pagination) {
    return this.fightersService.findAll(pagination);
  }

  @ApiOperation({ summary: 'Find by id fighter' })
  @ApiResponse({
    status: 200,
    type: IFighter,
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.fightersService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update by id fighter' })
  @ApiResponse({
    status: 200,
    type: IFighter,
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFighterDto: UpdateFighterDto) {
    return this.fightersService.update(+id, updateFighterDto);
  }

  @ApiOperation({ summary: 'Delete by id fighter' })
  @ApiResponse({
    status: 200,
    type: DeleteResponse,
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.fightersService.remove(+id);
  }
}
