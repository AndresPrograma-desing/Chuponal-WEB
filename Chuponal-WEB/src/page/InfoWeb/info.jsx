import { useState } from "react";
import { ArrowLeft, Send, Heart } from "lucide-react";
import styles from "../../../scss/info/info.module.scss";
import { useScrollTop } from "../../hooks/UseScroll";
import { home } from "../../const/index";

export default function InformacionWeb({ onVolver }) {
  const [sugerencia, setSugerencia] = useState("");
  const [mostrarContribucion, setMostrarContribucion] = useState(false);
    useScrollTop();
  const enviarWhatsApp = () => {
    const telefono = import.meta.env.VITE_WS_NUMBER;  
    const mensaje = encodeURIComponent(`Sugerencia para la pagina de Chuponal: ${sugerencia}`);
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
  };

  return (
    <div className={styles.contenedorInfo}>
      <main className={styles.bloqueInfo}>
        <div className={styles.encabezado}>
          <h2>Información</h2>
          <p>Detalles técnicos sobre el desarrollo y visión del sistema.</p>
        </div>

        <section className={styles.seccion}>
          <h3>Detalles del Proyecto</h3>
          <ul className={styles.listaDetalles}>
            <li><span>Desarrollador</span> <strong>{home.developer}</strong></li>
            <li><span>Fecha de lanzamiento</span> <strong>Junio 2026</strong></li>
            <li><span>Tecnologías</span> <strong>React, Vite, SCSS</strong></li>
            <li><span>Versión</span> <strong>1.0.0</strong></li>
          </ul>
        </section>

        <section className={styles.seccion}>
          <h3>Contribución</h3>
          {!mostrarContribucion ? (
            <button className={styles.botonAccion} onClick={() => setMostrarContribucion(true)}>
              <Heart size={18} /> ¿Tienes alguna sugerencia?
            </button>
          ) : (
            <>
              <textarea 
                className={styles.inputSugerencia}
                value={sugerencia}
                onChange={(e) => setSugerencia(e.target.value)}
                placeholder="Cuéntame tu idea..."
              />
              <button className={`${styles.botonAccion} ${styles.primario}`} onClick={enviarWhatsApp}>
                <Send size={18} /> Enviar sugerencia
              </button>
            </>
          )}
        </section>

        <button className={`${styles.botonAccion} ${styles.secundario}`} onClick={onVolver}>
          <ArrowLeft size={18} /> Regresar al menú
        </button>
      </main>
    </div>
  );
}