// consumo.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Consumo extends Document {
  @Prop({ required: true })
  usuarioId: string;  

  @Prop({ required: true })
  quantidade: number;

  @Prop({ required: true })
  data: Date;
}

export const ConsumoSchema = SchemaFactory.createForClass(Consumo);
