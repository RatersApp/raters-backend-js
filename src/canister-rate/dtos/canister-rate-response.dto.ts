import {ApiProperty} from '@nestjs/swagger';
import {CanisterRatePrincipalDto} from './canister-rate-principal.dto';

export class CanisterRateResponseDto {
  @ApiProperty({description: 'Record ID', type: CanisterRatePrincipalDto})
  id: CanisterRatePrincipalDto;

  @ApiProperty({description: 'Author principal', type: CanisterRatePrincipalDto})
  author: CanisterRatePrincipalDto;

  @ApiProperty({description: 'User ID'})
  userId: number;

  @ApiProperty({description: 'User principal', type: CanisterRatePrincipalDto})
  userPrincipal: CanisterRatePrincipalDto;

  @ApiProperty({description: 'Movie ID'})
  movieId: number;

  @ApiProperty({description: 'Rate'})
  rate: number;

  @ApiProperty({description: 'Comment'})
  comment: string;

  @ApiProperty({description: 'Created At'})
  createdAt: number;
}
