import {ActorMethod, ActorSubclass} from '@dfinity/agent';
import {CanisterRateErrorResponseDto} from '../dtos/canister-rate-error-response.dto';
import {CanisterRateResponseDto} from '../dtos/canister-rate-response.dto';

export interface CanisterRateActor extends ActorSubclass {
  createRecord: ActorMethod<[number, number, string, number, string], Promise<Result<CanisterRateResponseDto, CanisterRateErrorResponseDto>>>;
  editRecord: ActorMethod<[string, number, string], Promise<Result<CanisterRateResponseDto, CanisterRateErrorResponseDto>>>;
  readRecord: ActorMethod<[string], Promise<Result<CanisterRateResponseDto, CanisterRateErrorResponseDto>>>;
  deleteRecord: ActorMethod<[string], Promise<Result<CanisterRateResponseDto, CanisterRateErrorResponseDto>>>;
}

export type Result<T, E> = {Ok?: T; Err?: E};
