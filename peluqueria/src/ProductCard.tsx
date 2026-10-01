import './ProductCard.css';

// Interfaz: define qué datos recibe la tarjeta
interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

export function ProductCard({ name, price, image, inStock }: ProductCardProps) {
  // Condicionales que trabajan con el CSS
  const formattedPrice = `$${price.toFixed(2)}`;
  const stockClass = inStock ? "stock-badge available" : "stock-badge sold-out";
  const stockText = inStock ? "Turno disponible" : "Sin turnos";

  return (
    // Container principal de la tarjeta
    <div className="product-card">
      {/* Imagen del servicio */}
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

      {/* Estado del turno */}
      <span className={stockClass}>{stockText}</span>
    </div>
  );
}