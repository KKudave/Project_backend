import * as mongoose from 'mongoose';

export const ServiceSchema = new mongoose.Schema({
  s_id: String,
  s_name: String,
  s_info: String,
  s_price: String,
  s_type: String,
  s_img: String,
});
