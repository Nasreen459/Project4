  
 import React, { useState, useEffect } from "react";
 import "./styles/styles.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/productDetails"; // 👈 new import
import SearchBar from "./components/SearchBar";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // 👈 new state

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

  // 👇 NEW: View product details
  const handleView = (product) => {
    setSelectedProduct(product);
  };

  // 👇 NEW: Back to list
  const handleBack = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Product Management</h1>

      {selectedProduct ? (
        // 👇 SHOW DETAILS PAGE
        <ProductDetails
          product={selectedProduct}
          onBack={handleBack}
        />
      ) : (
        // 👇 SHOW MAIN PAGE
        <>
          <SearchBar search={search} setSearch={setSearch} />

          <ProductForm
            addOrUpdateProduct={addOrUpdateProduct}
            editProduct={editProduct}
          />

          <ProductList
            products={filteredProducts}
            onEdit={setEditProduct}
            onDelete={deleteProduct}
            onView={handleView}   // 👈 important
          />
        </>
      )}
    </div>
  );
}

export default App;