import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExchangerateService } from './exchangerate.service';
import { CreateExchangerateDto } from './dto/create-exchangerate.dto';
import { UpdateExchangerateDto } from './dto/update-exchangerate.dto';
const axios = require('axios');

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
    //key AIzaSyD_6yH-KwGXniV7oQPVangfCjx-veNl3a0

const origin = [40.7421, -73.9914];
const shops = [
  { name: "shop 1", rate: 20, location: [41.8337329, -87.7321554] },
  { name: "shop 2", rate: 25, location: [41.5837329, -87.2321554] },
  { name: "shop 3", rate: 23, location: [42.8337329, -85.7321554] },
  { name: "shop 5", rate: 15, location: [40.78, -73.988] }
];

const apiKey = 'AIzaSyD_6yH-KwGXniV7oQPVangfCjx-veNl3a0'; // Replace with your actual Google Maps API key

const calculateDistance = async (destination) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
      params: {
        origins: origin.join(','),
        destinations: destination.join(','),
        key: apiKey
      }
    });

    if (response.data.status === 'OK') {
      return response.data.rows[0].elements[0].distance.value; // Return distance in meters
    } else {
      console.error(`Error calculating distance. Status: ${response.data.status}`);
      return null;
    }
  } catch (error) {
    console.error(`Error calculating distance: ${error.message}`);
    return null;
  }
};

const calculateScore = async () => {
  const shopsWithScores = [];

  for (const shop of shops) {
    const distance = await calculateDistance(shop.location);
    
    if (distance !== null) {
      const inverseDistance = 10000 / distance; // Inversely proportional to distance
      const score = (inverseDistance * shop.rate).toFixed(2); // Weighted average of rate and distance
      shopsWithScores.push({ ...shop, score: parseFloat(score) });
    } else {
      console.log(`Score calculation for ${shop.name} failed.`);
    }
  }

  // Sort the array based on the scores in descending order
  shopsWithScores.sort((a, b) => b.score - a.score);

  // Log the sorted array
  console.log("Shops sorted by score:");
  console.log(shopsWithScores);
};

   return this.exchangerateService.bestrate();
  }
  

}
