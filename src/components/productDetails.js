import React from "react";

const ProductDetails = ({ product, onBack }) => {
  if (!product) return null;

  return (
    <div className="details-container">
      <button className="back-btn" onClick={onBack}>
        ⬅ Back
      </button>

      <div className="details-card">
        <h2>{product.name}</h2>

        <div className="details-info">
          <p><strong>Price:</strong> ₹ {product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;