import {ApiProperty} from '@nestjs/swagger';

export class CanisterRatePrincipalDto {
  @ApiProperty({description: 'Record ID', example: 'yvj7k-2rm6s-hzx3v-h43wh-gjccy-ezfqd-a5nop-tybtr-btsjy-4vzu6-jko'})
  __principal__: string;
}
