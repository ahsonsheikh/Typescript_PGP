import { StateInterface, ActionType, 
  ItemInterface, ChangeStorageInterface, 
  RoutesInterface } from "./globalTypes"

export const initialState = (): StateInterface => {
  return {
    items: [],
    filteredItems: [],
    milkCart: [],
    names: ["All items"],
    current: "/",
    history: "",
    searching: "",
    isSearching: false,
    filterAt: "All items",
    totalAmount: 0,
    error: false,
    loading: true
  }
}

export function reducer(state: StateInterface, action: ActionType): StateInterface{
  const { type, payload } = action
  let index: number | undefined;
  let newmilkCart: ItemInterface[];
  let newItem: ItemInterface;

  const getIndex = () => {
    return state.items.findIndex(item => item.id === payload)
  }

  switch(type){
    case "RESET":
      return {
        ...state,
        milkCart: []
      }

    case "AMOUNT":
      return{
        ...state,
        totalAmount: payload as number
      }

    case "CHANGE_QUANTITY":
      index = state.milkCart.findIndex(
        item => item.id === (payload as ChangeStorageInterface).id
      )
      newmilkCart = [...state.milkCart]
      newmilkCart[index].storage = (payload as ChangeStorageInterface).storage

      return {
        ...state,
        milkCart: newmilkCart
      }

    case "SEARCH":
      return{
        ...state,
        isSearching: !state.isSearching
      }
    case "MOVING":
      state.current = (payload as RoutesInterface).current;
      state.history = (payload as RoutesInterface).history
      return{ ...state }

    case "REMOVE":
      index = getIndex()
      newmilkCart = state.milkCart.filter(product => product.id !== payload)
      state.items[index].added = false;
      return{ 
        ...state,
        milkCart: newmilkCart
      }

    case "ADD_TO_CART":
      index = getIndex()
      if(index >= 0){
        newItem = state.items[index]
        // newItem.storage = 1
        newmilkCart = [
          ...state.milkCart,
          newItem
        ]
      }else{
        newmilkCart = state.milkCart
      }
      state.items[index].added = true;
      return{
        ...state,
        milkCart: newmilkCart
      }

    case "SEARCHING":
      state.filteredItems = state.items.filter(item => {
        let searching: string = payload as string
        return item.type.toLowerCase().includes(searching.toLowerCase())
      })
      return{
        ...state,
        searching: payload as string
      }

    case "FILTER":
      state.filteredItems = payload === "All items" ? state.items : state.items.filter(item => item.type === payload)
      return{ ...state, filterAt: payload as string }

    case "ADD_INITIAL_ITEMS":
      (payload as ItemInterface[]).forEach((product: ItemInterface) => {
        if(!state.names.includes(product.type)){
          state.names.push(product.type)
        }
      })
      state.items = payload as ItemInterface[];
      state.filteredItems = state.items;
      return {
        ...state,
        loading: false
      }

    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false
      }

    default:
      return { ...state }
  }
}