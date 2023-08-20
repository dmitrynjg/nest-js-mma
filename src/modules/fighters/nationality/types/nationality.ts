import { ApiProperty } from '@nestjs/swagger';

export class INationality {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: '🇦🇫' })
  code: string;
  @ApiProperty({ example: 'Afghan' })
  name: string;
}
