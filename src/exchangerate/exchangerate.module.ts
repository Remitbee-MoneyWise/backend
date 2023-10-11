import { Module } from '@nestjs/common';
import { ExchangerateService } from './exchangerate.service';
import { ExchangerateController } from './exchangerate.controller';

@Module({
  controllers: [ExchangerateController],
  providers: [ExchangerateService]
})
export class ExchangerateModule {}
