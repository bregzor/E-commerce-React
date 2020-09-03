import React, { useEffect, useState } from "react";

export default function TotalSum() {

  let [total, setTotal] = useState(0);
  
  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const product = JSON.parse(localStorage.getItem(localStorage.key(i)));
      sum += parseInt(product.price);
    }
    setTotal(sum);
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <div>
      <p>{total} sek</p>
    </div>
  );
}
