import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoModule } from './consumo/consumo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ricardopra:1234@usuario.yotq9.mongodb.net/?retryWrites=true&w=majority&appName=usuario'),
    ConsumoModule,
  ],
})
export class AppModule {}
