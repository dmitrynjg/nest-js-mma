import { ApiProperty } from '@nestjs/swagger';

export class IWeight {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: `MEN'S POUND-FOR-POUND` })
  name: string;
}
