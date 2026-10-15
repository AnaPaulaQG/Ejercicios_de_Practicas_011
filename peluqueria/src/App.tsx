import './App.css';
import { ProductCard } from './ProductCard';
import { Clock } from './Clock';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Ejemplo 1: Servicio disponible */}
      <ProductCard
        name="Corte de cabello"
        price={8500}
        image="/images/corte.jpg"
        inStock={true}
      />

      {/* Ejemplo 2: Servicio agotado */}
      <ProductCard
        name="Coloración completa"
        price={25000}
        image="/images/color.jpg"
        inStock={false}
      />

      {/* Ejemplo 3: Servicio disponible */}
      <ProductCard
        name="Peinado para evento"
        price={12000.5}
        image="/images/peinado.jpg"
        inStock={true}
      />

      {/* Reloj digital al final de la página */}
      <Clock />
    </div>
  );
}

export default App;