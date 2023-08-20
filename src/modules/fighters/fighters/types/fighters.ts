import { ApiProperty } from '@nestjs/swagger';
import { PaginationResponse } from 'src/lib/dto/types/pagination';
import { INationality } from '../../nationality/types/nationality';
import { IWeight } from '../../weights/types/weight';

export class IFighter {
  @ApiProperty({
    example: 1,
  })
  id: number;

  @ApiProperty({
    example: 'Marvin',
  })
  name: string;

  @ApiProperty({
    example: 'Vettori',
  })
  surname: string;

  @ApiProperty({
    example: 'The Italian Dream',
  })
  nickname: string;

  @ApiProperty({
    example: 183,
  })
  height: number;

  @ApiProperty({
    example: '1993-09-20T00:00:00.000Z',
  })
  dateBirthday: Date;

  @ApiProperty({ description: 'Fighter weight category', required: false })
  weight?: IWeight;

  @ApiProperty({ description: 'Fighter nationality category', required: false })
  nationality?: INationality;

  @ApiProperty({
    example: 0,
  })
  wins: number;

  @ApiProperty({
    example: 0,
  })
  losses: number;

  @ApiProperty({
    example: 0,
  })
  draws: number;

  @ApiProperty({
    example: 0,
  })
  knockouts: number;
}

export class IFighterResponsePagination extends PaginationResponse {
  @ApiProperty({ isArray: true })
  result: IFighter;
}
