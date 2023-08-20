import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from 'src/lib/dto/pagination';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  create(createEventDto: CreateEventDto) {
    const event = new Event();
    event.title = createEventDto.title;
    event.date = createEventDto.date;
    event.tvAnnouncer = createEventDto.tvAnnouncer;
    event.announcer = createEventDto.announcer;
    event.location = createEventDto.location;
    event.venue = createEventDto.venue;
    return this.eventRepository.save(event);
  }

  async findAll(pagination: Pagination) {
    const [result, total] = await this.eventRepository
      .createQueryBuilder('event')
      .leftJoinAndSelect('event.fights', 'fight')
      .leftJoinAndSelect('fight.firstСombatant', 'firstСombatant')
      .leftJoinAndSelect('fight.secondСombatant', 'secondСombatant')
      .leftJoinAndSelect('fight.status', 'status')
      .skip(pagination.limit * (pagination.page - 1))
      .take(pagination.limit)
      .getManyAndCount();

    return { total, result };
  }

  findOne(id: number) {
    return this.eventRepository
      .createQueryBuilder('event')
      .leftJoinAndSelect('event.fights', 'fight')
      .leftJoinAndSelect('fight.firstСombatant', 'firstСombatant')
      .leftJoinAndSelect('fight.secondСombatant', 'secondСombatant')
      .leftJoinAndSelect('fight.status', 'status')
      .where('id = :id', { id });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    if (!updateEventDto || Object.keys(updateEventDto).length === 0) {
      throw new HttpException(
        `You didn't send the data to update the event`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const event = await this.eventRepository.findOne({
      where: {
        id,
      },
    });

    Object.keys(updateEventDto).forEach((field) => {
      event[field] = updateEventDto[field];
    });

    return this.eventRepository.save(event);
  }

  remove(id: number) {
    return this.eventRepository.delete(id);
  }
}
