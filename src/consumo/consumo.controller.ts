import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ConsumoService } from './consumo.service';
import { Consumo } from './consumo.schema';

@Controller('consumo')
export class ConsumoController {
  constructor(private readonly consumoService: ConsumoService) {}

  @Post()
  registrar(@Body() consumo: Consumo) {
    return this.consumoService.registrarConsumo(consumo);
  }
 
  @Get('historico')
  async obterHistorico(@Query('usuarioId') usuarioId: string, @Query('inicio') inicio: string, @Query('fim') fim: string) {
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);
    return this.consumoService.obterHistorico(usuarioId);
  }

  @Get('alerta')
  verificarAlerta(@Query('usuarioId') usuarioId: string) {
    return this.consumoService.verificarAlerta(usuarioId);
  }
  
}
