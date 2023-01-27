import React from "react";
import { ActionType } from "../../globalTypes";

export interface ItemProps{
  id: string;
  name: string;
  type: string;
  storage: number;
  
  dispatch: React.Dispatch<ActionType>
  added: boolean
}