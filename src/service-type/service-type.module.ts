import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceTypeController } from './service-type.controller';
import { ServiceTypeService } from './service-type.service';

@Module({
  controllers: [ServiceTypeController],
  providers: [ServiceTypeService, PrismaService],
})
export class ServiceTypeModule {}
