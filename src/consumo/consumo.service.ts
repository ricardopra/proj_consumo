import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Consumo } from './consumo.schema';

@Injectable()
export class ConsumoService {
  constructor(@InjectModel(Consumo.name) private consumoModel: Model<Consumo>) {}

  async registrarConsumo(consumo: Consumo): Promise<Consumo> {
    const novoConsumo = new this.consumoModel(consumo);
    return novoConsumo.save();
  }

  async obterHistorico(usuarioId: string): Promise<Consumo[]> {
    return this.consumoModel.find({ usuarioId }).exec();
  }

  async verificarAlerta(usuarioId: string): Promise<string | null> {
    const consumos = await this.consumoModel
      .find({ usuarioId })
      .sort({ data: -1 })
      .limit(2)
      .exec();

    if (consumos.length < 2) return null;
    const [atual, anterior] = consumos;
    return atual.quantidade > anterior.quantidade ? "Alerta: Consumo elevado." : null;
  }
}
