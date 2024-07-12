import {Actor, HttpAgent} from '@dfinity/agent';
import {Ed25519KeyIdentity} from '@dfinity/identity';
import {BadRequestException, Injectable} from '@nestjs/common';
import {CanisterRateCreateRequestDto} from '../dtos/canister-rate-create.dto';
import {CanisterRateEditRequestDto} from '../dtos/canister-rate-edit.dto';
import {CanisterRateErrorResponseDto} from '../dtos/canister-rate-error-response.dto';
import {CanisterRateResponseDto} from '../dtos/canister-rate-response.dto';
import {ETypeOperations} from '../enums/type-operations.enum';
import {idlFactory} from '../interfaces/idl.factory';
import {CanisterRateActor} from '../interfaces/record-rate.interface';
import {RateCacheService} from './cache.service';

@Injectable()
export class CanisterRateService {
  private actor: CanisterRateActor;

  constructor(private readonly rateCacheService: RateCacheService) {}

  async onModuleInit() {
    const identity = Ed25519KeyIdentity.fromJSON(process.env.IDENTITY_ICP);
    const canisterId = process.env.CANISTER_ID;
    const agent = new HttpAgent({identity, host: process.env.CANISTER_HOST});
    if (process.env.NODE_ENV === 'local') await agent.fetchRootKey();
    this.actor = Actor.createActor(idlFactory, {
      agent,
      canisterId,
    });
  }

  public async createRecord(data: CanisterRateCreateRequestDto): Promise<CanisterRateResponseDto | CanisterRateErrorResponseDto> {
    // await this.rateCacheService.checkFrequencyOrFail(`${data.movieId}--${data.userId}`, ETypeOperations.Create);

    try {
      const response = await this.actor.createRecord(data.movieId, data.userId, data.userPrincipal, data.rate, data.comment);
      if (response.Ok) {
        const record = response.Ok;
        return record;
      } else if (response.Err) {
        throw new BadRequestException({error: response.Err});
      }
    } catch (e) {
      throw new BadRequestException(e?.response || {error: e?.props || 'Error'});
    }
  }

  public async editRecord(data: CanisterRateEditRequestDto): Promise<CanisterRateResponseDto | CanisterRateErrorResponseDto> {
    // await this.rateCacheService.checkFrequencyOrFail(data.id, ETypeOperations.Edit);

    try {
      const response = await this.actor.editRecord(data.id, data.rate, data.comment);
      if (response.Ok) {
        const record = response.Ok;
        return record;
      } else if (response.Err) {
        throw new BadRequestException({error: response.Err});
      }
    } catch (e) {
      throw new BadRequestException(e?.response || {error: e?.props || 'Error'});
    }
  }

  public async readRecord(id: string): Promise<CanisterRateResponseDto | null> {

    try {
      const response = await this.actor.readRecord(id);
      if (response.Ok) {
        const record = response.Ok;
        return record;
      } else if (response.Err) {
        throw new BadRequestException({error: response.Err});
      }
    } catch (e) {
      throw new BadRequestException(e?.response || {error: e?.props || 'Error'});
    }
  }

  public async deleteRecord(id: string): Promise<CanisterRateResponseDto | null> {
    // await this.rateCacheService.checkFrequencyOrFail(id, ETypeOperations.Delete);

    try {
      const response = await this.actor.deleteRecord(id);
      if (response.Ok) {
        const record = response.Ok;
        return record;
      } else if (response.Err) {
        throw new BadRequestException({error: response.Err});
      }
    } catch (e) {
      throw new BadRequestException(e?.response || {error: e?.props || 'Error'});
    }
  }
}
