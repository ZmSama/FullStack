/*
 * @Description:数据库模型
 * @Autor: ZmSama
 * @Date: 2021-02-22 11:07:26
 */
import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Epicode } from './models/episode.model';

// 全局引用实体模块，导出全局使用
const models = TypegooseModule.forFeature([User, Course, Epicode]);
@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/fullstack', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
