import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
