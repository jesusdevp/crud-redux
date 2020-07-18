import React, { Fragment, useEffect } from "react";
import Product from "./Product";
import Spinner from "./Spinner/Spinner";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productActions";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la Api
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  // Obtener el state
  const productos = useSelector((state) => state.products.productos);
  console.log(productos);
  const error = useSelector((state) => state.products.error);
  const cargando = useSelector((state) => state.products.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}
      {cargando ? <Spinner /> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? "No hay productos"
            : productos.map((producto) => (
                <Product key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
