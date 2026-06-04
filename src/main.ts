import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

let cachedServer: any;

export async function bootstrap() {
  if (!cachedServer) {
    const fastifyAdapter = new FastifyAdapter();
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      fastifyAdapter
    );

    app.enableCors();

    // Configuração do Swagger
    const config = new DocumentBuilder()
      .setTitle('Diário de Obra API')
      .setDescription('Documentação da API do Diário de Obra')
      .setVersion('2.0.2')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    // Configura o Swagger na rota /api
    SwaggerModule.setup('docs', app, document);

    // Inicializa a aplicação (carrega módulos, rotas, etc)
    await app.init();

    cachedServer = fastifyAdapter.getInstance();
  }

  return cachedServer;
}

// Exportação padrão que a Vercel exige para as Serverless Functions
export default async (req: any, res: any) => {
  const server = await bootstrap();
  await server.ready();
  server.routing(req, res);
};