import { Inject, Injectable } from '@nestjs/common';
import * as os from 'node:os';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getHello(): Promise<{ message: string; cache: any }> {
    await this.cacheManager.set('test', Date.now());
    return {
      message: 'Hello World! from host: ' + os.hostname(),
      cache: await this.cacheManager.get('test'),
    };
  }
}
