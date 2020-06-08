export interface IState {
  receipts: IReceipt[];
  filter: string;
  loadingFlagGlobal: boolean;
}

export interface IReceipt {
  id: number;
  title: string;
  description: string;
  created: any;
  modified: any;
  ingredients: IIngredient[];
}

export interface IIngredient {
  name: string;
  amount: number;
  unit: string;
}
