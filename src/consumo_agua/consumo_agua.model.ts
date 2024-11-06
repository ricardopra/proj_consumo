import { Schema, Document } from 'mongoose';

export interface ConsumoAgua extends Document {
  userId: string;
  quantidade: number;
  dataLeitura: Date;
}

export const ConsumoAguaSchema = new Schema({
  userId: { type: String, required: true },
  quantidade: { type: Number, required: true },
  dataLeitura: { type: Date, required: true },
});
