import {Body, Controller, Post} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';
import {AuthEndppoint} from 'src/shared/endpoints/auth.endpoint';
import {AuthRequestDto} from '../dtos/auth-request.dto';
import {AuthResponseDto} from '../dtos/auth-response.dto';
import {AuthService} from '../services/auth.service';

@ApiTags(AuthEndppoint.ApiTags)
@Controller(AuthEndppoint.Controller.GroupAPI)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(AuthEndppoint.Controller.Verify)
  @ApiOperation({description: 'Check signature'})
  @ApiOkResponse({type: AuthResponseDto})
  public async auth(@Body() data: AuthRequestDto): Promise<AuthResponseDto> {
    return await this.authService.auth(data);
  }
}
