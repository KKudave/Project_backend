import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceTypeService {
  constructor(private prisma: PrismaService) {}

  async createServiceType(data: any) {
    const createServiceType = await this.prisma.serviceType.create({
      data: data,
    });
    return;
  }

  async findAll() {
    const data = await this.prisma.serviceType.findMany();
    return data;
  }

  async findById(id: string) {
    const data = await this.prisma.serviceType.findFirst({
      where: { t_id: id },
    });
    return data;
  }

  async updateServiceType(id: string, data: any) {
    const updateServiceType = await this.prisma.serviceType.update({
      where: { t_id: id },
      data: data,
    });
    return;
  }

  async deleteServiceType(id: string) {
    const deleteServiceType = await this.prisma.serviceType.delete({
      where: { t_id: id },
    });
    return;
  }
}
