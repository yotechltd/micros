import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathController } from './math/math.controller';
import { MicroserviceController } from './microservice/microservice.controller';
import { microserviceService } from './microservice/microservice.service';
import { Account, AccountSchema } from './schema/account.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kumol:kumol254@cluster0.5hz61.mongodb.net/Nest-Test?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  controllers: [AppController, MathController, MicroserviceController],
  providers: [AppService, microserviceService],
  exports: [MongooseModule],
})
export class AppModule {}
