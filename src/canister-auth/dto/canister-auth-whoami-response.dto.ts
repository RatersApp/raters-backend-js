import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class CanisterAuthWhoamiResponseDto {
  @ApiProperty({description: 'Principal as string'})
  public whoami: string;

  @ApiPropertyOptional({description: 'Authorized in contrellers'})
  public authorized: boolean;
}
