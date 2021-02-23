/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-22 11:03:19
 */
import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    return this.adminService.getHello();
  }
}
