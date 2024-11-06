import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ricardopra:1234@usuario.yotq9.mongodb.net/?retryWrites=true&w=majority&appName=usuario'),
    ConsumoAguaModule,
  ],
})
export class AppModule {}
