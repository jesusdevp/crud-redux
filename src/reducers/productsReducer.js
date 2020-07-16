import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

const initialState = {
  products: [],
  error: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
