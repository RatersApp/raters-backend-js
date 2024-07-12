import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';
import {IsNumber, IsString} from 'class-validator';

export class CanisterRateCreateRequestDto {
  @Expose()
  @IsNumber()
  @ApiProperty({description: 'Movie ID'})
  public movieId: number;

  @Expose()
  @IsNumber()
  @ApiProperty({description: 'User ID'})
  public userId: number;

  @Expose()
  @IsString()
  @ApiProperty({description: 'User principal'})
  public userPrincipal: string;

  @Expose()
  @IsNumber()
  @ApiProperty({description: 'Rate'})
  public rate: number;

  @Expose()
  @IsString()
  @ApiProperty({description: 'Comment'})
  public comment: string;
}
