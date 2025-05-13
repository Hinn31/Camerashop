import React, { Component } from "react";
import Add from "./Add";
import ProductList from "./ProductList";

class ProductManager extends Component {
  constructor(props) {
    super(props);
    const products = JSON.parse(localStorage.getItem("products")) || [];
    this.state = {
      products: products
    };
  }

  // Method to add a product and update the product list
  handleAddProduct = (updatedProducts) => {
    this.setState({ products: updatedProducts }, () => {
      // Save the updated list to localStorage after updating state
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Quản lý sản phẩm</h1>
        <div className="row">
          {/* Passing the handleAddProduct method to Add component */}
          <Add products={this.state.products} onAddProduct={this.handleAddProduct} />
        </div>
        <div className="row">
          {/* Passing products from state to ProductList component */}
          <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default ProductManager;
