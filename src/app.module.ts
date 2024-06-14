import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `services/.backend.env.${process.env.NODE_ENV}`,
    }),
    AuthModule,
  ],
})
export class AppModule {}
