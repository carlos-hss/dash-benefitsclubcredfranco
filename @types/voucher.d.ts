type IVoucher = {
  id: number;
  code: string;
  user_id: number;
  product: IProduct;
  used_date: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
};

type IVouchersResponse = {
  data: {
    vouchers: IVoucher[];
  }
}