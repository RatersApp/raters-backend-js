import {ActorMethod, ActorSubclass} from '@dfinity/agent';
import {CanisterAuthWhoamiResponseDto} from '../dto/canister-auth-whoami-response.dto';

export interface CanisterAuthActor extends ActorSubclass {
  whoami: ActorMethod<[], Promise<CanisterAuthWhoamiResponseDto>>;
  updateControllers: ActorMethod<[], Promise<boolean>>;
}
