import { ApiProperty } from '@nestjs/swagger';
import { PaginationResponse } from 'src/lib/dto/types/pagination';
import { IEvent } from 'src/modules/events/types/event';
import { IFighter } from 'src/modules/fighters/fighters/types/fighters';

export class IFightStatus {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'knockout' })
  name: number;
}

export class IFight {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 2 })
  totalRounds: number;
  @ApiProperty({ example: '12:32' })
  totalTime: string;
  @ApiProperty({ example: false })
  isWinFirstСombatant: boolean;
  @ApiProperty()
  status: IFightStatus | null;
  @ApiProperty()
  firstСombatant: IFighter;
  @ApiProperty()
  secondСombatant: IFighter;
  @ApiProperty({ example: '2023-08-03' })
  date: Date;
}

export class IFightWithEvent extends IFight {
  @ApiProperty()
  event: IEvent;
}

export class IFightResponsePagination extends PaginationResponse {
  @ApiProperty({ isArray: true })
  result: IFightWithEvent;
}
