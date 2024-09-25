import { Inject, Injectable } from '@nestjs/common';
import * as os from 'node:os';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getHello(): Promise<{ message: string; cacheViewCount: number }> {
    const counter = await this.cacheManager.get<number>('viewCount');
    const viewCount = (counter ?? 0) + 1;

    await this.cacheManager.set('viewCount', viewCount);

    return {
      message: 'Hello World! from host: ' + os.hostname(),
      cacheViewCount: viewCount,
    };
  }
}
