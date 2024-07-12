import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from './auth/auth.module';
import {CanisterAuthModule} from './canister-auth/canister-auth.module';
import {CanisterModule} from './canister-rate/canister-rate.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `services/.backend.env.${process.env.NODE_ENV}`,
    }),
    AuthModule,
    CanisterModule,
    CanisterAuthModule,
  ],
})
export class AppModule {}
