import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { ServiceSchema } from './service.schema';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  // imports: [
  //   MongooseModule.forFeature([{ name: 'service', schema: ServiceSchema }]),
  // ],
  controllers: [ServiceController],
  providers: [ServiceService, PrismaService],
  exports: [ServiceService],
})
export class ServiceModule {}
