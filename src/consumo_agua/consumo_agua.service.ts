import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsumoAgua } from './consumo_agua.model';

@Injectable()
export class ConsumoAguaService {
  constructor(
    @InjectModel('ConsumoAgua') private readonly consumoAguaModel: Model<ConsumoAgua>,
  ) {}

  async registrarConsumo(userId: string, quantidade: number, dataLeitura: Date) {
    const novoConsumo = new this.consumoAguaModel({ userId, quantidade, dataLeitura });
    return await novoConsumo.save();
  }

  async consultarHistorico(userId: string, dataInicio: Date, dataFim: Date) {
    return await this.consumoAguaModel.find({
      userId,
      dataLeitura: { $gte: dataInicio, $lte: dataFim },
    }).exec();
  }

  async verificarConsumoElevado(userId: string) {
    const consumos = await this.consumoAguaModel.find({ userId }).sort({ dataLeitura: -1 }).limit(2).exec();
    if (consumos.length < 2) return null;

    const [mesAtual, mesAnterior] = consumos;
    return mesAtual.quantidade > mesAnterior.quantidade ? 'Alerta: Consumo elevado!' : null;
  }
}
