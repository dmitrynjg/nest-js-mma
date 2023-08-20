import {
  IsOptional,
  IsBoolean,
  IsString,
  Matches,
  IsDateString,
  IsEnum
} from 'class-validator';
import { IsGtZeroAndInt } from 'src/lib/decorators/validator/is-gt-zero-and-int.decorator';
import { ApiProperty } from '@nestjs/swagger';

enum FightStatus {
  Knockout = 'knockout',
  TKO = 'tko',
  Draw = 'draw',
  Canceled = 'canceled',
  Disqualification = 'disqualification',
}

export class CreateFightDto {
  @ApiProperty({ example: 1, description: 'id in event schema' })
  @IsGtZeroAndInt({
    message: 'event must be integer and greater than zero',
  })
  event: number;

  @ApiProperty({
    example: 1,
    description: 'id of the first fighter in the fighter schema',
  })
  @IsGtZeroAndInt({
    message: 'fistCombatant must be integer and greater than zero',
  })
  firstСombatant: number;

  @ApiProperty({
    example: 1,
    description: 'id of the second fighter in the fighter schema',
  })
  @IsGtZeroAndInt({
    message: 'secondCombatnt must be integer and greater than zero',
  })
  secondСombatant: number;

  @ApiProperty({
    example: 1,
    description: 'id of the second fighter in the fighter schema',
  })
  @IsOptional()
  @IsEnum(FightStatus)
  status: string;

  @ApiProperty({
    example: false,
  })
  @IsOptional()
  @IsBoolean({ message: 'isWinFirstCombatant must be boolean' })
  isWinFirstСombatant?: boolean;

  @IsDateString()
  date: Date;

  @ApiProperty({ example: '12:32', description: 'How long did the fight last' })
  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Format totalTime hh:mm' })
  totalTime?: string;

  @ApiProperty({ example: 2, description: 'Number of rounds of combat' })
  @IsOptional()
  @IsGtZeroAndInt({
    message: 'totalRounds must be integer and greater than zero',
  })
  totalRounds: number;
}
