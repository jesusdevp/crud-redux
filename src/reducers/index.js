import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import alertaReducer from "./alertReducer";

export default combineReducers({
  products: productsReducer,
  alerta: alertaReducer,
});
