import { IsGtZeroAndInt } from '../decorators/validator/is-gt-zero-and-int.decorator';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Pagination {
  @ApiProperty({
    example: 1,
  })
  @IsOptional()
  @IsGtZeroAndInt({ message: 'page' })
  page?: number = 1;
  @ApiProperty({
    example: 10,
  })
  @IsOptional()
  @IsGtZeroAndInt({ message: 'limit' })
  limit?: number = 10;
}
