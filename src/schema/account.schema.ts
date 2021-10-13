import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  age: number;
}
export const AccountSchema = SchemaFactory.createForClass(Account);
