import { useEffect, useState } from "react";

export const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      // Actualiza la posición del cursor en cada movimiento
      const handleMouseMove = (event) => {
        setCursorPosition({ x: event.pageX, y: event.pageY });
      };
  
      // Agrega el event listener para el movimiento del mouse
      document.addEventListener("mousemove", handleMouseMove);
  
      // Eliminar el event listener cuando el componente se desmonte
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
      <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    );
}
