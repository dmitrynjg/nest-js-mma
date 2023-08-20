import { IsString, IsOptional, IsDateString } from 'class-validator';
import { IsGtZeroAndInt } from 'src/lib/decorators/validator/is-gt-zero-and-int.decorator';
import { IsGtZeroNumber } from 'src/lib/decorators/validator/is-gt-zero-number.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFighterDto {
  @ApiProperty({
    example: 'Marvin',
  })
  @IsString({ message: 'name must be a string value' })
  name: string;

  @ApiProperty({
    example: 'Vettori',
  })
  @IsString({ message: 'surname must be a string value' })
  surname: string;

  @ApiProperty({
    example: 'The Italian Dream',
  })
  @IsOptional()
  @IsString({ message: 'nickname must be a string value' })
  nickname?: string;

  @ApiProperty({
    description: 'id in nationality schema',
    example: 1,
  })
  @IsGtZeroAndInt({
    message: 'id nationality must be an integer and greater than 0',
  })
  nationality: number;

  @ApiProperty({
    description: 'id in weight schema',
    example: 1,
  })
  @IsGtZeroAndInt({
    message: 'weight category id must be an integer and greater than 0',
  })
  weight: number;

  @ApiProperty({
    description: `fighter's height in cm`,
    example: 183,
  })
  @IsGtZeroNumber({ message: 'heigth must be a number greater than 0' })
  height: number;

  @ApiProperty({
    example: '1993-09-20',
  })
  @IsDateString()
  birthday: Date;
}
