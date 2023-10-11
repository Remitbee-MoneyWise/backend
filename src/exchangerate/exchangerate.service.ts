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

  bestrate() {
    const rates = [
      {
        "name": "Sampath Bank Plc",
        "rate": 15,
        "location": [6.894923, 79.887876],
        "score": 26.78
      },
      {
        "name": "The Sovereign",
        "rate": 25,
        "location": [6.899408, 79.893693],
        "score": 0.2
      },
      {
        "name": "Zylan Luxury Villa",
        "rate": 23,
        "location": [6.910101, 79.894931],
        "score": 0.19
      },
      {
        "name": "Hotel Janaki",
        "rate": 20,
        "location": [6.888039, 79.887449],
        "score": 0.16
      }
    ];
  
    console.log("Rates", rates);
  
    return { data: rates };  }
}
