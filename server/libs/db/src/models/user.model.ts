/*
 * @Description:用户模型
 * @Autor: ZmSama
 * @Date: 2021-02-22 11:17:41
 */
import { prop } from '@typegoose/typegoose';

export class User {
  @prop()
  username: string;

  @prop()
  password: string;
}
