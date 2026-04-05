import React from "react";

function ProductItem({ product, onEdit, onDelete, onView }) {
  return (
    <div
      className="product-card"
      onClick={() => onView(product)}   // 👈 click pe details open
    >
      <div className="product-info">
        <strong>{product.name}</strong>
        <span>₹ {product.price}</span>
        <span>{product.category}</span>
      </div>

      <div className="actions">
        <button
          className="edit-btn"
          onClick={(e) => {
            e.stopPropagation(); // 👈 card click trigger na ho
            onEdit(product);
          }}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation(); // 👈 card click trigger na ho
            onDelete(product.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;