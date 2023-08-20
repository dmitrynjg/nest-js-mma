import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from 'src/lib/dto/pagination';
import { FightStatus } from 'src/modules/fights/entities/fight-status.entity';
import { Fight } from 'src/modules/fights/entities/fight.entity';
import { Repository, Transaction } from 'typeorm';
import { Nationality } from '../nationality/entity/nationality.entity';
import { Weight } from '../weights/entity/weight.entity';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { Fighter } from './entities/fighter.entity';

@Injectable()
export class FightersService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
    @InjectRepository(Nationality)
    private readonly nationalityRepository: Repository<Nationality>,
    @InjectRepository(Weight)
    private readonly weightRepository: Repository<Weight>,
    @InjectRepository(Fight)
    private readonly fightRepository: Repository<Fight>,
    @InjectRepository(FightStatus)
    private readonly fightStatusRepository: Repository<FightStatus>,
  ) {}

  async create(createFighterDto: CreateFighterDto) {
    const weight = await this.weightRepository.findOne({
      where: { id: createFighterDto.weight },
    });

    if (!weight) {
      throw new HttpException('weight not found', HttpStatus.BAD_REQUEST);
    }

    const nationality = await this.nationalityRepository.findOne({
      where: { id: createFighterDto.nationality },
    });

    if (!nationality) {
      throw new HttpException('nationality not found', HttpStatus.BAD_REQUEST);
    }

    const fighter = new Fighter();
    fighter.name = createFighterDto.name;
    fighter.surname = createFighterDto.surname;
    fighter.nickname = createFighterDto.nickname;
    fighter.height = createFighterDto.height;
    fighter.dateBirthday = new Date(createFighterDto.birthday);
    fighter.weight = weight;
    fighter.nationality = nationality;
    return this.fighterRepository.save(fighter);
  }

  async findAll(pagination: Pagination) {
    const [result, total] = await this.fighterRepository.findAndCount({
      skip: (pagination.page - 1) * pagination.limit,
      take: pagination.limit,
    });
    return { total, result };
  }

  findOne(id: number) {
    return this.fighterRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateFighterDto: UpdateFighterDto) {
    if (!updateFighterDto || Object.keys(updateFighterDto).length === 0) {
      throw new HttpException(
        `You didn't send the data to update the fighter`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const fighter = await this.fighterRepository.findOne({
      where: {
        id,
      },
    });

    Object.keys(updateFighterDto).forEach((field) => {
      fighter[field] = updateFighterDto[field];
    });

    return this.fighterRepository.save(fighter);
  }
  async getTotalWins(fighterId: number) {
    return this.fightRepository
      .createQueryBuilder('fight')
      .select(['COUNT(fight.id) as wins'])
      .where(
        `(fight.firstСombatantId = :fighterId AND fight.isWinFirstСombatant = :isWin) 
      OR (fight.secondСombatantId = :fighterId AND fight.isWinFirstСombatant = :isNotWin)`,
        {
          fighterId: fighterId,
          isWin: true,
          isNotWin: false,
        },
      )
      .getRawOne();
  }

  getTotalLosses(fighterId: number) {
    return this.fightRepository
      .createQueryBuilder('fight')
      .select(['COUNT(fight.id) as losses'])
      .where(
        `(fight.firstСombatantId = :fighterId AND fight.isWinFirstСombatant = :isNotWin) 
    OR (fight.secondСombatantId = :fighterId AND fight.isWinFirstСombatant = :isWin)`,
        {
          fighterId: fighterId,
          isWin: true,
          isNotWin: false,
        },
      )
      .getRawOne();
  }

  getTotalFightStatus(fighterId: number) {
    return this.fightRepository
      .createQueryBuilder('fight')
      .leftJoinAndSelect('fight.status', 'st')
      .select('st.name', 'statusName')
      .addSelect('COUNT(fight.id)', 'count')
      .where(
        `(fight.firstСombatantId = :fighterId AND fight.isWinFirstСombatant = :isWin AND st.name IN (:successStatus)) 
      OR (fight.secondСombatantId = :fighterId AND fight.isWinFirstСombatant = :isNotWin AND st.name IN (:successStatus)) 
      OR (st.name = 'draw' AND (fight.secondСombatantId = :fighterId  OR fight.firstСombatantId = :fighterId))
      OR (fight.firstСombatantId = :fighterId AND fight.isWinFirstСombatant = :isWin AND st.name NOT IN (:successStatus))
      OR (fight.secondСombatantId = :fighterId AND fight.isWinFirstСombatant = :isNotWin AND st.name NOT IN (:successStatus)) `,
        {
          fighterId: fighterId,
          successStatus: ['knockout', 'tko'],
          isWin: true,
          isNotWin: false,
        },
      )
      .groupBy('st.name') // использование нового псевдонима "st"
      .getRawMany();
  }

  async updateRating({
    fighterFirst,
    fighterSecond,
  }: {
    fighterFirst: Fighter;
    fighterSecond: Fighter;
  }) {
    const resultFirstFighter = (
      await this.getTotalFightStatus(fighterFirst.id)
    ).reduce(
      (obj, status) => ({ ...obj, [status.statusName]: status.count }),
      {},
    );
    const resultSecondFighter = (
      await this.getTotalFightStatus(fighterSecond.id)
    ).reduce(
      (obj, status) => ({ ...obj, [status.statusName]: status.count }),
      {},
    );

    const totalWinsFirstFighter = await this.getTotalWins(fighterFirst.id);
    const totalLossesFirstFighter = await this.getTotalLosses(fighterFirst.id);
    const totalWinsSecondFighter = await this.getTotalWins(fighterSecond.id);
    const totalLossesSecondFighter = await this.getTotalLosses(
      fighterSecond.id,
    );

    fighterFirst.wins = totalWinsFirstFighter.wins;
    fighterFirst.losses = totalLossesFirstFighter.losses;
    fighterSecond.wins = totalWinsSecondFighter.wins;
    fighterSecond.losses = totalLossesSecondFighter.losses;

    if (resultFirstFighter.draw) {
      fighterFirst.draws = resultFirstFighter.draw;
    }

    if (resultSecondFighter.draw) {
      fighterSecond.draws = resultSecondFighter.draw;
    }

    if (resultFirstFighter.knockout) {
      fighterFirst.knockouts = resultFirstFighter.knockout;
    }

    if (resultSecondFighter.knockout) {
      fighterSecond.knockouts = resultSecondFighter.knockout;
    }

    await this.fighterRepository.save(fighterFirst, {
      transaction: true,
    });
    await this.fighterRepository.save(fighterSecond, {
      transaction: true,
    });

    return { fighterFirst, fighterSecond };
  }

  remove(id: number) {
    return this.fighterRepository.delete(id);
  }
}
