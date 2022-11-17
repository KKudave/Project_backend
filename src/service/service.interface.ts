import { Document } from 'mongoose';

export interface Service extends Document {
  readonly s_id: String;
  readonly s_name: String;
  readonly s_info: String;
  readonly s_price: String;
  readonly s_type: String;
  readonly s_img: String;
}
