import './App.css';
import { ProductCard } from './ProductCard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Ejemplo 1: Servicio con turno disponible */}
      <ProductCard
        name="Corte de cabello"
        price={8500}
        image="/images/corte.jpg"
        inStock={true}
      />

      {/* Ejemplo 2: Servicio sin turnos */}
      <ProductCard
        name="Coloración completa"
        price={25000}
        image="/images/color.jpg"
        inStock={false}
      />

      {/* Ejemplo 3: Servicio con turno disponible */}
      <ProductCard
        name="Peinado para evento"
        price={12000.5}
        image="/images/peinado.jpg"
        inStock={true}
      />
    </div>
  );
}

export default App;