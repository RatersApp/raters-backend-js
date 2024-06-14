import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';
import {IsString, Length} from 'class-validator';

export class AuthRequestDto {
  @Expose()
  @IsString()
  @ApiProperty({description: 'Mesage'})
  public message: string;

  @Expose()
  @IsString()
  @Length(182, 182)
  @ApiProperty({description: 'Public key'})
  public publicKey: string;

  @Expose()
  @IsString()
  @Length(128, 128)
  @ApiProperty({description: 'Signature'})
  public signature: string;
}
