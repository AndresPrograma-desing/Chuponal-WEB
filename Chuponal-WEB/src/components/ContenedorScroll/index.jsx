import { useEffect } from "react";

export default function ContenedorScroll({ vista, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [vista]); // Se ejecuta automáticamente cada vez que la vista cambia

  return <>{children}</>;
}