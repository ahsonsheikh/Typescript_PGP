interface productInterface {
    name: string;
    price: number;
    image: string;
}

export interface StateInterface {
    products: productInterface[];
}

export interface ActionInterface{
    type: string;
    payload: unknown;
  } 