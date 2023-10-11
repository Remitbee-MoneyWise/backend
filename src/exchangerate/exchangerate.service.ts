import { Injectable } from '@nestjs/common';
import { CreateExchangerateDto } from './dto/create-exchangerate.dto';
import { UpdateExchangerateDto } from './dto/update-exchangerate.dto';

@Injectable()
export class ExchangerateService {
  create(createExchangerateDto: CreateExchangerateDto) {
    return 'This action adds a new exchangerate';
  }

  findAll() {
    return `This action returns all exchangerate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exchangerate`;
  }

  update(id: number, updateExchangerateDto: UpdateExchangerateDto) {
    return `This action updates a #${id} exchangerate`;
  }

  remove(id: number) {
    return `This action removes a #${id} exchangerate`;
  }
}
