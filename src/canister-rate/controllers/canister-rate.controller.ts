import {Body, Controller, Delete, Get, Patch, Post, Query} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiQuery, ApiTags} from '@nestjs/swagger';
import {CanisterRateEndppoint} from 'src/shared/endpoints/canister-rate.endpoint';
import {CanisterRateCreateRequestDto} from '../dtos/canister-rate-create.dto';
import {CanisterRateEditRequestDto} from '../dtos/canister-rate-edit.dto';
import {CanisterRateErrorResponseDto} from '../dtos/canister-rate-error-response.dto';
import {CanisterRateResponseDto} from '../dtos/canister-rate-response.dto';
import {CanisterRateService} from '../services/canister-rate.service';

@ApiTags(CanisterRateEndppoint.ApiTags)
@Controller(CanisterRateEndppoint.Controller.GroupAPI)
export class CanisterRateController {
  constructor(private readonly canisterService: CanisterRateService) {}

  @Post()
  @ApiOperation({description: ''})
  @ApiOkResponse({type: CanisterRateResponseDto})
  public async createRecord(@Body() data: CanisterRateCreateRequestDto): Promise<CanisterRateResponseDto | CanisterRateErrorResponseDto> {
    return await this.canisterService.createRecord(data);
  }

  @Patch()
  @ApiOperation({description: ''})
  @ApiOkResponse({type: CanisterRateResponseDto})
  public async editRecord(@Body() data: CanisterRateEditRequestDto): Promise<CanisterRateResponseDto | CanisterRateErrorResponseDto> {
    return await this.canisterService.editRecord(data);
  }

  @Get()
  @ApiOperation({description: ''})
  @ApiOkResponse({type: CanisterRateResponseDto})
  @ApiQuery({name: 'id', required: true, type: String})
  public async readRecord(@Query('id') id: string): Promise<CanisterRateResponseDto | null> {
    return await this.canisterService.readRecord(id);
  }

  @Delete()
  @ApiOperation({description: ''})
  @ApiOkResponse({type: CanisterRateResponseDto})
  @ApiQuery({name: 'id', required: true, type: String})
  public async deleteRecord(@Query('id') id: string): Promise<CanisterRateResponseDto | null> {
    return await this.canisterService.deleteRecord(id);
  }
}
