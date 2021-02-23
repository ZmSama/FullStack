/*
 * @Description:课程模型（视频）
 * @Autor: ZmSama
 * @Date: 2021-02-22 14:04:27
 */
import { ApiProperty } from '@nestjs/swagger';
import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Epicode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @prop()
  @ApiProperty({ description: '课程名字' })
  name: string;

  @prop()
  @ApiProperty({ description: '封面图' })
  cover: string;

  @prop({ type: [Epicode] })
  @ApiProperty({
    description: '课时',
    example: { name: '名字', file: '文件地址' },
  })
  episodes: Ref<Epicode>[];
}
