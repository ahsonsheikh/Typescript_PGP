import { ActionType } from "../../globalTypes";

export interface ProductProps{
  name: string;
  type: string;
  storage: number;
  dispatch: React.Dispatch<ActionType>;
  id: string,
}