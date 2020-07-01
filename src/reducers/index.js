import { combineReducers } from "redux";
import { database } from "./dataReducers";
import { home } from "./homeReducers";
import { cart } from "./cartReducers";

export const rootReducer = combineReducers({
  database,
  home,
  cart
});
