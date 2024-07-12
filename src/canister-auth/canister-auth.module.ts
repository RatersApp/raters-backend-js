import {Module} from '@nestjs/common';
import {CanisterAuthController} from './controllers/canister-auth.controller';
import {CanisterAuthService} from './services/canister-auth.service';

@Module({
  controllers: [CanisterAuthController],
  providers: [CanisterAuthService],
})

export class CanisterAuthModule {}
