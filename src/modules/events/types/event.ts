import { ApiProperty } from '@nestjs/swagger';
import { PaginationResponse } from 'src/lib/dto/types/pagination';
import { Fight } from 'src/modules/fights/entities/fight.entity';

export class IEvent {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'UFC Fight Night: Vettori vs. Cannonier' })
  title: string;
  @ApiProperty({ example: '2024-01-02' })
  date: Date;
  @ApiProperty({
    example: 'Brendan Fitzgerald, Dominick Cruz, Paul Felder',
  })
  tvAnnouncer: string;
  @ApiProperty({
    example: 'Joe Martinez',
  })
  announcer: string;
  @ApiProperty({
    example: 'Las Vegas Nevada',
  })
  location: string;
  @ApiProperty({
    example: 'UFC Apex, Octagon',
  })
  venue: string;
}

export class IEventWithFights extends IEvent {
  @ApiProperty({
    isArray: true,
    example: [
      {
        id: 1,
        isWinFirstСombatant: true,
        totalRounds: 3,
        totalTime: '12:11',
        date: '2024-01-01T00:00:00.000Z',
        firstСombatant: {
          id: 1,
          name: 'Marvin',
          surname: 'Vettori',
          nickname: 'The Italian Dream',
          height: 183,
          dateBirthday: '1993-09-20T00:00:00.000Z',
          weight: {
            id: 1,
            name: "MEN'S POUND-FOR-POUND",
          },
          nationality: {
            id: 1,
            code: '🇦🇫',
            name: 'Afghan',
          },
          wins: 0,
          losses: 0,
          draws: 0,
          knockouts: 0,
        },
        secondСombatant: {
          id: 2,
          name: 'Vettor',
          surname: 'Marvin',
          nickname: 'The Italian Dream Vettor',
          height: 183,
          dateBirthday: '1993-09-20T00:00:00.000Z',
          weight: {
            id: 1,
            name: "MEN'S POUND-FOR-POUND",
          },
          nationality: {
            id: 1,
            code: '🇦🇫',
            name: 'Afghan',
          },
          wins: 0,
          losses: 0,
          draws: 0,
          knockouts: 0,
        },
        status: {
          id: 1,
          name: 'knockout',
        },
      },
    ],
  })
  fights: Fight[];
}
export class IEventResponsePagination extends PaginationResponse {
  @ApiProperty({ isArray: true })
  result: IEventWithFights;
}
