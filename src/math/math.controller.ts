import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from 'src/schema/account.schema';

@Controller('math')
export class MathController {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {}
  @MessagePattern({ cmd: 'sums' })
  async accumulate(data: Record<string, string>): Promise<any> {
    if (data.message == 'Get User Data') {
      const value = await this.accountModel.find();
      console.log(value);
      return value;
    }
    if (data.message == 'Return Static Data') return 0;
    //return (data || []).reduce((a, b) => a + 10);
  }
}
