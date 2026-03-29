import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(data);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addOrUpdateProduct = (product) => {
    if (editProduct) {
      setProducts(
        products.map((p) => (p.id === product.id ? product : p))
      );
      setEditProduct(null);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Product Management</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ProductForm
        addOrUpdateProduct={addOrUpdateProduct}
        editProduct={editProduct}
      />

      <ProductList
        products={filteredProducts}
        onEdit={setEditProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default App;