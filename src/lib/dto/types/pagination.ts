import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponse {
  @ApiProperty({ example: 1 })
  total: number;
  result: any;
}
