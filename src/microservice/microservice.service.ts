import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from 'src/schema/account.schema';
@Injectable()
export class microserviceService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {}
  async getData(): Promise<Account[]> {
    const value = await this.accountModel.find();
    console.log(value);
    return [...value];
  }
}
