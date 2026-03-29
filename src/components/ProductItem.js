import React from "react";

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <div className="product-info">
        <strong>{product.name}</strong>
        <span>₹ {product.price}</span>
        <span>{product.category}</span>
      </div>

      <div className="actions">
        <button
          className="edit-btn"
          onClick={() => onEdit(product)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
