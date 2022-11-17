import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ServiceTypeModule } from './service-type/service-type.module';

@Module({
  imports: [
    ServiceModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://hotel-flipper:2BEZrUybH0KDnTcM@cluster0.sbse9oq.mongodb.net/test',
    // ),
    PrismaModule,
    ServiceTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
