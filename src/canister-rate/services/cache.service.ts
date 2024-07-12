// import {CACHE_MANAGER} from '@nestjs/cache-manager';
// import {Cache} from 'cache-manager';
import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {OperationFrequency} from '../consts/operation-frequency.const';
import {ETypeOperations} from '../enums/type-operations.enum';

@Injectable()
export class RateCacheService {
  // constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}
   constructor() {}

  public async checkFrequencyOrFail(keyData: string, typeOperation: ETypeOperations): Promise<void> {
    const key = `${keyData}--${typeOperation}`;
    // const frequency = (await this.cacheService.get<number>(key)) || 0;
    // console.log(key, frequency);
    // await this.cacheService.set(key, frequency + 1);
    // if (frequency >= OperationFrequency[typeOperation]) {
    //   throw new HttpException('Too many requests', HttpStatus.TOO_MANY_REQUESTS);
    // }
  }
}
