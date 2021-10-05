import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('microservice')
export class MicroserviceController {
  @EventPattern('printing')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data.text);
  }

  @MessagePattern('sum')
  async handleSumAmount(value: number[]): Promise<number> {
    return (value || []).reduce((a, b) => a + b);
  }
}
