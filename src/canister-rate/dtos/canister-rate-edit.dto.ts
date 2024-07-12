import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';
import {IsNumber, IsString} from 'class-validator';

export class CanisterRateEditRequestDto {
  @Expose()
  @IsString()
  @ApiProperty({description: 'Principal ID', example: 'yvj7k-2rm6s-hzx3v-h43wh-gjccy-ezfqd-a5nop-tybtr-btsjy-4vzu6-jko'})
  public id: string;

  @Expose()
  @IsNumber()
  @ApiProperty({description: 'Rate'})
  public rate: number;

  @Expose()
  @IsString()
  @ApiProperty({description: 'Comment'})
  public comment: string;
}
