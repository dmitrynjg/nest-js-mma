import { ApiProperty } from '@nestjs/swagger';

export class DeleteResponse {
  @ApiProperty({ example: [] })
  raw: any[];
  @ApiProperty({ example: 1 })
  affected: number;
}
