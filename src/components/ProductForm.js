import React, { useState, useEffect } from "react";

function ProductForm({ addOrUpdateProduct, editProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editProduct) {
      setName(editProduct.name);
      setPrice(editProduct.price);
      setCategory(editProduct.category);
    }
  }, [editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !category) {
      alert("All fields required");
      return;
    }

    addOrUpdateProduct({
      id: editProduct ? editProduct.id : Date.now(),
      name,
      price,
      category,
    });

    setName("");
    setPrice("");
    setCategory("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">
        {editProduct ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ProductForm;