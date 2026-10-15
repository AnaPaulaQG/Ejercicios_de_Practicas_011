import { useState, useEffect } from 'react';

export function Clock() {
  // Estado: guarda la hora actual
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Cada 1 segundo actualizamos la hora
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpieza: se ejecuta cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      {time.toLocaleTimeString('es-AR')}
    </div>
  );
}