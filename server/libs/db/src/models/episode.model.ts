/*
 * @Description:课时模型
 * @Autor: ZmSama
 * @Date: 2021-02-22 14:10:06
 */

import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Epicode {
  @prop()
  @ApiProperty({ description: '名字' })
  name: string;

  @prop()
  @ApiProperty({ description: '文件地址' })
  file: string;
}
