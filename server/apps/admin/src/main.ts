/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-22 11:03:19
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  const config = new DocumentBuilder()
    .setTitle('《全栈之巅》up主的全栈项目后台接口文档')
    .setDescription('这是为后台管理准备的API')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
  console.log(`http://localhost:3000/api-docs`);
}
bootstrap();
