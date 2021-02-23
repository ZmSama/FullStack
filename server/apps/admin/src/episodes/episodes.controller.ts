/*
 * @Description:课时控制器
 * @Autor: ZmSama
 * @Date: 2021-02-22 15:10:10
 */
import { Epicode } from '@libs/db/models/episode.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
@Crud({
  model: Epicode,
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
  constructor(@InjectModel(Epicode) private readonly model) {}
}
