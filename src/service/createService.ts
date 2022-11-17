import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './service.interface';
// import { CreateVideoDto } from './create-video.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel('service') private readonly serviceModel: Model<Service>,
  ) {}
}
