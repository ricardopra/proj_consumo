import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoService } from './consumo.service';
import { ConsumoController } from './consumo.controller';
import { Consumo, ConsumoSchema } from './consumo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Consumo.name, schema: ConsumoSchema }]),
  ],
  controllers: [ConsumoController],
  providers: [ConsumoService],
})
export class ConsumoModule {}
