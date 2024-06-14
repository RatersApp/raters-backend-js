import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({description: 'Result'})
  public result: boolean;

  @ApiPropertyOptional({description: 'Erorr message'})
  public error?: string;
}
