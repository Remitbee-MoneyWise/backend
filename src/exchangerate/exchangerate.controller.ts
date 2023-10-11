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
    const rates = [];

    return { data: rates };
  }

}
