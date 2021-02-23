/*
 * @Description:用户模型
 * @Autor: ZmSama
 * @Date: 2021-02-22 11:17:41
 */

import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

// 模型配置，自动为每个模型添加配置属性
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop()
  // 这个是用来装饰swagger中字段的描述的，可选
  @ApiProperty({ description: '用户名' })
  username: string;

  @prop()
  @ApiProperty({ description: '密码' })
  password: string;
}
