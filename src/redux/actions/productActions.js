import { ActionType } from "../contents/actionType"


export const setProduct = (products) => {
  return{
    type: ActionType.SET_PRODUCTS,
    payload: products
  }
}