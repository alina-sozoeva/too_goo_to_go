export interface IProduct {
  id: string;
  title: string;
  description: string;
  create_at: Date;
  quantity: number;
}

export interface IProducts {
  message: string;
  result: IProduct[];
}
