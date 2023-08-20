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
import { FightsService } from './fights.service';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';
import { Pagination } from 'src/lib/dto/pagination';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IFightResponsePagination, IFightWithEvent } from './types/fight';
import { DeleteResponse } from 'src/lib/swagger/delete-response';

@Controller('fights')
export class FightsController {
  constructor(private readonly fightsService: FightsService) {}

  @ApiOperation({ summary: 'Creating Fight' })
  @ApiResponse({
    status: 200,
    type: IFightWithEvent,
  })
  @Post()
  create(@Body() createFightDto: CreateFightDto) {
    return this.fightsService.create(createFightDto);
  }

  @ApiOperation({ summary: 'Find list Fight' })
  @ApiResponse({
    status: 200,
    type: IFightResponsePagination,
  })
  @Get()
  findAll(@Query() pagination: Pagination) {
    return this.fightsService.findAll(pagination);
  }

  @ApiOperation({ summary: 'Find by id fight' })
  @ApiResponse({
    status: 200,
    type: IFightWithEvent,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fightsService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update by id fight' })
  @ApiResponse({
    status: 200,
    type: IFightWithEvent,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFightDto: UpdateFightDto) {
    return this.fightsService.update(+id, updateFightDto);
  }

  @ApiOperation({ summary: 'Delete by id fight' })
  @ApiResponse({
    status: 200,
    type: DeleteResponse,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fightsService.remove(+id);
  }
}
