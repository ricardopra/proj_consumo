import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';

@Controller('consumo-agua')
export class ConsumoAguaController {
  constructor(private readonly consumoAguaService: ConsumoAguaService) {}

  @Post('registrar')
  async registrarConsumo(@Body() consumoData: { userId: string, quantidade: number, dataLeitura: Date }) {
    return this.consumoAguaService.registrarConsumo(consumoData.userId, consumoData.quantidade, consumoData.dataLeitura);
  }

  @Get('historico')
  async consultarHistorico(
    @Query('userId') userId: string,
    @Query('dataInicio') dataInicio: string,
    @Query('dataFim') dataFim: string,
  ) {
    return this.consumoAguaService.consultarHistorico(userId, new Date(dataInicio), new Date(dataFim));
  }

  @Get('alerta/:userId')
  async verificarConsumoElevado(@Param('userId') userId: string) {
    return this.consumoAguaService.verificarConsumoElevado(userId);
  }
}
