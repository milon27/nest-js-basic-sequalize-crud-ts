import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5005, () => {
    console.log(`running on http://localhost:5005/`);

  });
}
bootstrap();
