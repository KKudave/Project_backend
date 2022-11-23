import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ServiceDTO } from 'src/dto/service.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './service.interface';
import { constants } from 'buffer';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async createService(data: any) {
    const createService = await this.prisma.service.create({ data: data });
    return;
  }

  async findAll() {
    const data = await this.prisma.service.findMany();
    return data;
  }

  async findByType(id: string) {
    const data = await this.prisma.service.findMany({
      where: { s_type: id },
    });
    return data;
  }

  async updateService(id: string, data: any) {
    const updateService = await this.prisma.service.update({
      where: { s_id: id },
      data: data,
    });
    return;
  }

  async deleteService(id: string) {
    const deleteService = await this.prisma.service.delete({
      where: { s_id: id },
    });
    return;
  }
}
