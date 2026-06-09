import { useState } from "react";
import { ArrowLeft, Package, X } from "lucide-react";
import styles from "../../../../../scss/objetos.module.scss";
import { objetosData } from "../../../../data/historicalData";

export default function GaleriaObjetos({ onVolver }) {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  return (
    <div className={styles.contenedorObjetos}>
      {fotoSeleccionada && (
        <div className={styles.modalOverlay} onClick={() => setFotoSeleccionada(null)}>
          <div className={styles.modalContenido} onClick={(e) => e.stopPropagation()}>
            <button className={styles.cerrarModal} onClick={() => setFotoSeleccionada(null)}>
              <X size={24} />
            </button>
            <img src={fotoSeleccionada} alt="Objeto ampliado" />
          </div>
        </div>
      )}

      <main className={styles.bloqueObjetos}>
        <div className={styles.metaObjetos}>
          <Package size={16} />
          <span>Patrimonio Material</span>
        </div>

        <h2 className={styles.tituloObjetos}>Objetos Históricos</h2>
        <p className={styles.descripcionObjetos}>
          Muestra y preservación digital de los elementos históricos tangibles de la comunidad.
        </p>

        <div className={styles.gridObjetos}>
          {objetosData.map((objeto) => (
            <div key={objeto.id} className={styles.tarjetaObjeto}>
              <div 
                className={styles.previewObjeto} 
                onClick={() => objeto.foto && setFotoSeleccionada(objeto.foto)}
                style={{ cursor: objeto.foto ? 'pointer' : 'default' }}
              >
                {objeto.foto ? (
                  <img src={objeto.foto} alt={objeto.nombre} />
                ) : (
                  <Package size={48} />
                )}
              </div>
              <div className={styles.infoObjeto}>
                <h3>{objeto.nombre}</h3>
                <p>{objeto.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.enrutamiento}>
          <button className={styles.botonVolver} onClick={onVolver}>
            <ArrowLeft size={18} />
            Volver
          </button>
        </div>
      </main>
    </div>
  );
}