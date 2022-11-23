import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ServiceDTO } from 'src/dto/service.dto';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  /**
   *
   * @param body
   * @return
   */
  @Post()
  async createService(@Body() body: ServiceDTO) {
    return this.serviceService.createService(body);
  }
  @Get()
  async getAllService() {
    return this.serviceService.findAll();
  }

  @Get(':type')
  async getService(@Param('type') type: string) {
    return this.serviceService.findByType(type);
  }

  /**
   *
   * @param body
   * @return
   */
  @Put()
  async updateService(@Body() body: ServiceDTO) {
    return this.serviceService.updateService(body.s_id, body);
  }

  @Delete(':id')
  async deleteService(@Param('id') id: string) {
    return this.serviceService.deleteService(id);
  }
}
