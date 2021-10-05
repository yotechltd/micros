import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathController } from './math/math.controller';
import { MicroserviceController } from './microservice/microservice.controller';

@Module({
  imports: [],
  controllers: [AppController, MathController, MicroserviceController],
  providers: [AppService],
})
export class AppModule {}
