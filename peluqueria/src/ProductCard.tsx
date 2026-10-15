import { useState } from 'react';
import './ProductCard.css';

// Interfaz: define qué datos recibe la tarjeta
interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

export function ProductCard({ name, price, image, inStock }: ProductCardProps) {
  // Estado: la cantidad empieza en 0
  const [quantity, setQuantity] = useState(0);

  // Condicionales que trabajan con el CSS
  const formattedPrice = `$${price.toFixed(2)}`;
  const stockClass = inStock ? "stock-badge available" : "stock-badge sold-out";
  const stockText = inStock ? "Disponible" : "Agotado";

  // Funciones de los botones
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const reset = () => {
    setQuantity(0);
  };

  return (
    // Container principal de la tarjeta
    <div className="product-card">
      {/* Imagen del producto */}
      <div className="product-image-container">
        <img
          src={image}
          alt={name} // Alt text para accesibilidad
          className="product-image"
        />
      </div>

      {/* Nombre */}
      <h3 className="product-name">{name}</h3>

      {/* Precio */}
      <p className="product-price">{formattedPrice}</p>

      {/* Estado de stock */}
      <span className={stockClass}>{stockText}</span>

      {/* Cantidad */}
      <p className="product-quantity">Cantidad: {quantity}</p>

      {/* Botones */}
      <div className="product-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment} disabled={!inStock}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}