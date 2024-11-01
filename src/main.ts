import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);  
  
  // Habilitar CORS para permitir requisições do frontend
  app.enableCors();

  // Configurar ativos estáticos para servir arquivos públicos, como imagens e CSS
  app.useStaticAssets(join(__dirname, '..', 'public'));  

  // Definindo a porta que o Vercel atribuirá automaticamente, ou 3000 como fallback
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
