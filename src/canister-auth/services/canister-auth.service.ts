import {Actor, HttpAgent} from '@dfinity/agent';
import {Ed25519KeyIdentity} from '@dfinity/identity';
import {Injectable} from '@nestjs/common';
import {CanisterAuthWhoamiResponseDto} from '../dto/canister-auth-whoami-response.dto';
import {CanisterAuthActor} from '../interfaces/canister-auth.interface';
import {idlFactory} from './auth-idl.factory';

@Injectable()
export class CanisterAuthService {
  private actor: CanisterAuthActor;

  constructor() {}

  async onModuleInit() {
    // const identity = Ed25519KeyIdentity.generate();
    // const identityJson = JSON.stringify(identity.toJSON());
    // console.log('Identity:', identityJson);
    const identity = Ed25519KeyIdentity.fromJSON(process.env.IDENTITY_ICP);
    const canisterId = process.env.CANISTER_ID;
    const agent = new HttpAgent({identity, host: process.env.CANISTER_HOST});
    if (process.env.NODE_ENV === 'local') await agent.fetchRootKey();

    this.actor = Actor.createActor(idlFactory, {
      agent,
      canisterId,
    });
  }

  public async whoami(): Promise<CanisterAuthWhoamiResponseDto> {
    const response = await this.actor.whoami();
    return response;
  }

  public async updateControllers(): Promise<boolean> {
    const response = await this.actor.updateControllers();
    return response;
  }
}
