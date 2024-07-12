import {Controller, Get, Post} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';
import {CanisterAuthEndppoint} from 'src/shared/endpoints/canister-auth.endpoint';
import {CanisterAuthWhoamiResponseDto} from '../dto/canister-auth-whoami-response.dto';
import {CanisterAuthService} from '../services/canister-auth.service';

@ApiTags(CanisterAuthEndppoint.ApiTags)
@Controller(CanisterAuthEndppoint.Controller.GroupAPI)
export class CanisterAuthController {
  constructor(private readonly canisterAuthService: CanisterAuthService) {}

  @Get(CanisterAuthEndppoint.Controller.whoAmI)
  @ApiOperation({description: ''})
  @ApiOkResponse({type: CanisterAuthWhoamiResponseDto})
  public async whoami(): Promise<CanisterAuthWhoamiResponseDto> {
    return await this.canisterAuthService.whoami();
  }

  @Post(CanisterAuthEndppoint.Controller.updateControllers)
  @ApiOperation({description: ''})
  @ApiOkResponse({type: Boolean})
  public async updateControllers(): Promise<boolean> {
    return await this.canisterAuthService.updateControllers();
  }
}
