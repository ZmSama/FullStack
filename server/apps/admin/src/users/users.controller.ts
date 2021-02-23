/*
 * @Description:用户控制器
 * @Autor: ZmSama
 * @Date: 2021-02-22 11:23:34
 */
import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

// 只要写好模型、导入crud并在控制器的构造器将模型注入到model里面即可实现增删改查一系列操作非常方便
@Crud({
  model: User,
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
}
