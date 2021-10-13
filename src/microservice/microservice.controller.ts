import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Account } from 'src/schema/account.schema';
import { microserviceService } from './microservice.service';

@Controller('microservice')
export class MicroserviceController {
  constructor(private readonly accountService: microserviceService) {}
  @EventPattern('printing')
  async handleMessagePrinted(data: Record<string, unknown>): Promise<any[]> {
    console.log(data.text);
    if (data.text == 'getData') {
      console.log('get data ');
      const data = [1, 2, 3, 4, 5];
      return data;
    }
  }

  @EventPattern('sum')
  handleSumAmount(value: number[]): number {
    console.log((value || []).reduce((a, b) => a + b));
    return (value || []).reduce((a, b) => a + b);
  }
}
