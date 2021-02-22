/*
 * @Description:用户控制器
 * @Autor: ZmSama
 * @Date: 2021-02-22 11:23:34
 */
import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
  model: User,
})
@Controller('users')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
}
