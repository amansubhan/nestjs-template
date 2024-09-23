import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      socket: {
        host: 'nestjs-api-cache',
        port: 6379,
        connectTimeout: 10000,
      },
      ttl: 0,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
