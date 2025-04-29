import React, { Component } from "react";
import data from "./data1";

class Add extends Component {
  constructor(props) {
    super(props);

    // Lấy danh sách sản phẩm ban đầu
    const allproducts = this.props.products || data("products");
    const lastProduct = allproducts.length > 0 
                      ? allproducts[allproducts.length - 1] 
                      : null;

    this.state = {
      id: lastProduct ? parseInt(lastProduct.id) + 1 : 1,
      name: "",
      name_category: "Thời trang nam",
      code: "",
      image: "",
      price: "",
      old_price: "",
      quantity: 1,
    };

    this.products = Array.isArray(allproducts) ? [...allproducts] : [];
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: name === "quantity" || name === "price" || name === "old_price" 
              ? parseFloat(value) || 0 
              : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      alert("Vui lòng nhập tên sản phẩm");
      return;
    }

    const updatedProducts = [...this.products, { ...this.state }];

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // // Gọi callback từ props (nếu có)
    // if (typeof this.props.onAddProduct === "function") {
    //   this.props.onAddProduct(updatedProducts);
    // }

    // Reset form và tăng ID (chỉ khi thêm mới)
    this.setState(prevState => ({
      id: prevState.id + 1,
      name_category: "Thời trang nam",
      code: "",
      image: "",
      price: "",
      old_price: "",
      quantity: 1,
    }));

    this.products = updatedProducts; // Cập nhật danh sách sản phẩm
  };

  render() {
    return (
      <div className="col-sm-4">
        <form onSubmit={this.handleSubmit}>
          {/* Tên sản phẩm */}
          <div className="form-group">
            <label htmlFor="name">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Danh mục */}
          <div className="form-group">
            <label htmlFor="name_category">Danh mục</label>
            <select
              className="form-control"
              id="name_category"
              name="name_category"
              value={this.state.name_category}
              onChange={this.handleChange}
            >
              <option value="Thời trang nam">Thời trang nam</option>
              <option value="Thời trang nữ">Thời trang nữ</option>
            </select>
          </div>

          {/* Mã sản phẩm */}
          <div className="form-group">
            <label htmlFor="code">Mã sản phẩm</label>
            <input
              type="text"
              className="form-control"
              id="code"
              name="code"
              value={this.state.code}
              onChange={this.handleChange}
            />
          </div>

          {/* Link hình ảnh */}
          <div className="form-group">
            <label htmlFor="image">Link hình ảnh</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>

          {/* Giá */}
          <div className="form-group">
            <label htmlFor="price">Giá</label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>

          {/* Giá cũ */}
          <div className="form-group">
            <label htmlFor="old_price">Giá cũ</label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="old_price"
              name="old_price"
              value={this.state.old_price}
              onChange={this.handleChange}
            />
          </div>

          {/* Số lượng */}
          <div className="form-group">
            <label htmlFor="quantity">Số lượng</label>
            <input
              type="number"
              min="1"
              className="form-control"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Thêm sản phẩm
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
