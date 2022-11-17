export interface ServiceDTO {
  s_id: string;
  s_name: string;
  s_price: Float32Array;
  s_type: string;
}

export interface ServiceTypeDTO {
  t_id: string;
  s_type: string;
  s_bound: string;
  s_cond: string;
  s_imgPath: string;
  s_cat: string;
}
