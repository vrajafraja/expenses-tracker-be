import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;
}
