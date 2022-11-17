import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ServiceTypeDTO } from 'src/dto/service.dto';
import { ServiceTypeService } from './service-type.service';

@Controller('servicetype')
export class ServiceTypeController {
  constructor(private servicetypeService: ServiceTypeService) {}

  /**
   *
   * @param body
   * @return
   */
  @Post()
  async createServiceType(@Body() body: ServiceTypeDTO) {
    return this.servicetypeService.createServiceType(body);
  }
  @Get()
  async getAllServiceType() {
    return this.servicetypeService.findAll();
  }

  @Get(':id')
  getServiceType(@Param('id') id: string) {
    return this.servicetypeService.findById(id);
  }

  /**
   *
   * @param body
   * @return
   */
  @Put()
  async updateServiceType(@Body() body: ServiceTypeDTO) {
    return this.servicetypeService.updateServiceType(body.t_id, body);
  }

  // @Delete(':id')
  // async deleteService(@Param('id') id: string) {
  //   return this.servicetypeService.deleteServiceType(id);
  // }
}
