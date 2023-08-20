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
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Pagination } from 'src/lib/dto/pagination';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IEvent, IEventResponsePagination } from './types/event';
import { DeleteResponse } from 'src/lib/swagger/delete-response';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}
  @ApiOperation({ summary: 'Creating event' })
  @ApiResponse({
    status: 200,
    type: IEvent,
  })
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @ApiOperation({ summary: 'Find list events' })
  @ApiResponse({
    status: 200,
    type: IEventResponsePagination,
  })
  @Get()
  findAll(@Query() pagination: Pagination) {
    return this.eventsService.findAll(pagination);
  }

  @ApiOperation({ summary: 'Find by id fighter' })
  @ApiResponse({
    status: 200,
    type: IEvent,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update by id fighter' })
  @ApiResponse({
    status: 200,
    type: IEvent,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @ApiOperation({ summary: 'Delete by id event' })
  @ApiResponse({
    status: 200,
    type: DeleteResponse,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
