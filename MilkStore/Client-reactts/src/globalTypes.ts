import React from "react";

export interface ChangeStorageInterface{
  id: string;
  storage: number
}

export interface RoutesInterface{
  current: string;
  history: string;
}

interface RatingInterface{
  rate: number;
  count: number;
}

export interface ItemInterface{
  id: string;
  name: string;
  type: string;
  storage?: number;
  added?: boolean
}

export interface StateInterface{
  items: Array<ItemInterface>,
  filteredItems: Array<ItemInterface>,
  milkCart: Array<ItemInterface>,
  searching: string,
  names: Array<string>,
  current: string,
  history: string,
  isSearching: boolean,
  filterAt: string,
  totalAmount: number,
  error: boolean,
  loading: boolean
}

export type ActionType = {
  type: string,
  payload?: 
    | ItemInterface[] 
    | string 
    | number 
    | ChangeStorageInterface
    | RoutesInterface
}

export interface PageProps {
  state: StateInterface;
  dispatch?: React.Dispatch<ActionType>;
  ctx?: React.Context<StateInterface>
}