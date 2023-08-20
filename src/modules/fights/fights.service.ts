import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fight } from './entities/fight.entity';
import { Pagination } from 'src/lib/dto/pagination';
import { Event } from 'src/modules/events/entities/event.entity';
import { Fighter } from 'src/modules/fighters/fighters/entities/fighter.entity';
import { FightStatus } from './entities/fight-status.entity';
import { FightersService } from 'src/modules/fighters/fighters/fighters.service';
import { EntityManager, getManager } from 'typeorm';

@Injectable()
export class FightsService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
    @InjectRepository(Fight)
    private readonly fightRepository: Repository<Fight>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(FightStatus)
    private readonly fighstStatusRepository: Repository<FightStatus>,
    private readonly fighterService: FightersService,
  ) {}

  async create(createFightDto: CreateFightDto) {
    const { firstСombatant, secondСombatant, event, status, ...otherFields } =
      createFightDto;

    const findEvent = await this.eventRepository.findOne({
      where: { id: event },
    });

    if (event && !findEvent) {
      throw new HttpException('not found event', HttpStatus.BAD_REQUEST);
    }

    const findFirstCombatant = await this.fighterRepository.findOne({
      where: { id: firstСombatant },
    });
    if (firstСombatant && !findFirstCombatant) {
      throw new HttpException(
        'not found first combatant',
        HttpStatus.BAD_REQUEST,
      );
    }

    const findSecondСombatant = await this.fighterRepository.findOne({
      where: { id: secondСombatant },
    });

    if (secondСombatant && !findSecondСombatant) {
      throw new HttpException(
        'not found second combatant',
        HttpStatus.BAD_REQUEST,
      );
    }
    const findStatus = status
      ? await this.fighstStatusRepository.findOne({ where: { name: status } })
      : null;

    if (!findStatus && status) {
      throw new HttpException('status not found', HttpStatus.BAD_REQUEST);
    }

    const fight = new Fight();
    if (
      findStatus &&
      typeof createFightDto.isWinFirstСombatant === 'boolean' &&
      createFightDto.totalTime &&
      createFightDto.totalRounds
    ) {
      fight.totalRounds = otherFields.totalRounds;
      fight.totalTime = otherFields.totalTime;
      fight.isWinFirstСombatant =
        findStatus.name !== 'canceled' ? otherFields.isWinFirstСombatant : null;
      fight.status = findStatus;
    }
    fight.firstСombatant = findFirstCombatant;
    fight.date = otherFields.date;
    fight.secondСombatant = findSecondСombatant;
    fight.event = findEvent;
    const result = await this.fightRepository.save(fight, {
      transaction: true,
    });
    return this.fighterService
      .updateRating({
        fighterFirst: findFirstCombatant,
        fighterSecond: findSecondСombatant,
      })
      .then(({ fighterFirst, fighterSecond }) => {
        result.firstСombatant = fighterFirst;
        result.secondСombatant = fighterSecond;
        return result;
      });
  }

  async findAll(pagination: Pagination) {
    const [result, total] = await this.fightRepository.findAndCount({
      relations: ['event', 'firstСombatant', 'secondСombatant'],
      skip: pagination.limit * (pagination.page - 1),
      take: pagination.limit,
    });
    return { total, result };
  }

  findOne(id: number) {
    return this.fightRepository.findOne({
      relations: ['event', 'firstСombatant', 'secondСombatant'],
      where: { id },
    });
  }

  async update(id: number, updateFightDto: UpdateFightDto) {
    if (updateFightDto && typeof updateFightDto === 'object') {
      delete updateFightDto.firstСombatant;
      delete updateFightDto.secondСombatant;
      delete updateFightDto.event;
    }

    if (!updateFightDto || Object.keys(updateFightDto).length === 0) {
      throw new HttpException(
        `You didn't send the data to update the fight`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const fight = await this.fightRepository.findOne({
      relations: ['status', 'firstСombatant', 'secondСombatant'],
      where: {
        id,
      },
    });
    const { status, ...updateFields } = updateFightDto;

    Object.keys(updateFields).forEach((field) => {
      fight[field] = updateFields[field];
    });

    if (status) {
      const findStatus = await this.fighstStatusRepository.findOne({
        where: { name: status },
      });
      fight.status = findStatus;
    }

    const save = await this.fightRepository.save(fight);
    if (fight.status) {
      await this.fighterService
        .updateRating({
          fighterFirst: fight.firstСombatant,
          fighterSecond: fight.secondСombatant,
        })
        .then(({ fighterFirst, fighterSecond }) => {
          save.firstСombatant = fighterFirst;
          save.secondСombatant = fighterSecond;
        });
    }
    return save;
  }

  remove(id: number) {
    return this.fightRepository.delete(id);
  }
}
