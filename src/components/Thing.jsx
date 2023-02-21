import React from "react";

export default function Thing({ thing }) {
  return (
    <div className="thing">
      <div className="sku">{thing.sku}</div>
      <div className="sku">{thing.sku}</div>
    </div>
  );
}
