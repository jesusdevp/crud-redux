import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/productos/nuevo" component={NewProduct} />
          <Route exact path="/productos/editar/:id" component={EditProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
