import { IsString, IsDateString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({
    description: 'event title',
    example: 'UFC Fight Night: Vettori vs. Cannonier',
  })
  @IsString({ message: 'title must be a string' })
  title: string;

  @ApiProperty({
    description: 'The date of the event',
    example: '2023-08-20',
  })
  @IsDateString()
  date: Date;

  @ApiProperty({
    description: 'location where the event takes place',
    example: 'Las Vegas Nevada',
  })
  @IsString({ message: 'location must be a string' })
  location: string;

  @ApiProperty({
    description: `Here you can specify a more precise venue, let's say the building`,
    example: 'UFC Apex, Octagon',
  })
  @IsString({ message: 'venue must be a string' })
  venue: string;

  @ApiProperty({
    example: 'Joe Martinez',
  })
  @IsString({ message: 'аnnouncer must be a string' })
  announcer: string;

  @ApiProperty({
    example: 'Brendan Fitzgerald, Dominick Cruz, Paul Felder',
  })
  @IsString({ message: 'tvAnnouncer must be a string' })
  tvAnnouncer: string;
}
