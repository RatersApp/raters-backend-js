import {CacheModule} from '@nestjs/cache-manager';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {redisStore} from 'cache-manager-redis-yet';
import {RedisClientOptions} from 'redis';
import {CanisterRateController} from './controllers/canister-rate.controller';
import {RateCacheService} from './services/cache.service';
import {CanisterRateService} from './services/canister-rate.service';

@Module({
  imports: [
    // CacheModule.registerAsync<RedisClientOptions>({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     store: redisStore,
    //     socket: {
    //       host: process.env.REDIS_HOST,
    //       port: +process.env.REDIS_PORT,
    //       password: process.env.REDIS_PASSWORD,
    //     },
    //     ttl: 86400_1000,
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [CanisterRateController],
  providers: [CanisterRateService, RateCacheService],
})
export class CanisterModule {}
