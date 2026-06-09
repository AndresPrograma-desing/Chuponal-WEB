import { useState } from "react";
import { ArrowLeft, User, X } from "lucide-react";
import styles from "../../../../../scss/Galery.module.scss";
import { habitantesData } from "../../../../data/historicalData";

export default function GaleriaHabitantes({ onVolver }) {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  return (
    <div className={styles.contenedorIntroduccion}>
      {/* Modal para la imagen ampliada */}
      {fotoSeleccionada && (
        <div className={styles.modalOverlay} onClick={() => setFotoSeleccionada(null)}>
          <div className={styles.modalContenido} onClick={(e) => e.stopPropagation()}>
            <button className={styles.cerrarModal} onClick={() => setFotoSeleccionada(null)}>
              <X size={24} />
            </button>
            <img src={fotoSeleccionada} alt="Ampliación" />
          </div>
        </div>
      )}

      <main className={styles.bloqueLectura}>
        <h2 className={styles.tituloSeccion}>Primeros Habitantes</h2>
        
        <div className={styles.gridHabitantes}>
          {habitantesData.map((usuario) => (
            <div key={usuario.id} className={styles.tarjetaHabitante}>
              <div 
                className={styles.avatarContenedor} 
                onClick={() => usuario.foto && setFotoSeleccionada(usuario.foto)}
                style={{ cursor: usuario.foto ? 'pointer' : 'default' }}
              >
                {usuario.foto ? (
                  <img src={usuario.foto} alt={usuario.nombre} className={styles.fotoHabitante} />
                ) : (
                  <User size={32} />
                )}
              </div>
              <span className={styles.nombreHabitante}>{usuario.nombre}</span>
            </div>
          ))}
        </div>

        <button className={styles.botonSiguiente} onClick={onVolver}><ArrowLeft size={18} /> Volver</button>
      </main>
    </div>
  );
}