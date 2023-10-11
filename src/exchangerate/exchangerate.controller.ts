import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExchangerateService } from './exchangerate.service';
import { CreateExchangerateDto } from './dto/create-exchangerate.dto';
import { UpdateExchangerateDto } from './dto/update-exchangerate.dto';

@Controller('exchangerate')
export class ExchangerateController {
  constructor(private readonly exchangerateService: ExchangerateService) {}

  @Post()
  create(@Body() createExchangerateDto: CreateExchangerateDto) {
    return this.exchangerateService.create(createExchangerateDto);
  }

  @Get()
  findAll() {
    return this.exchangerateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exchangerateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExchangerateDto: UpdateExchangerateDto) {
    return this.exchangerateService.update(+id, updateExchangerateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exchangerateService.remove(+id);
  }

  @Get('best-rate')
  async bestRate(): Promise<{ data: any }> {
    console.log("rates")
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

    return { data: rates };
  }

}
