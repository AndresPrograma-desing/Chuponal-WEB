import { useState } from "react";
import { ArrowLeft, Users, Package, Info } from "lucide-react";
import styles from "../../../../scss/menu.module.scss";
import InformacionWeb from "../../../page/InfoWeb/info";

export default function MenuGalerias({ onVolver, onSeleccionar }) {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  if (mostrarInfo) {
    return <InformacionWeb onVolver={() => setMostrarInfo(false)} />;
  }

  return (
    <div className={styles.contenedorMenu}>
      <main className={styles.bloqueMenu}>
        <div className={styles.metaMenu}>
          <Users size={16} />
          <span>Archivos Multimedia</span>
        </div>
        <h2 className={styles.tituloMenu}>Galerías de la Comunidad</h2>
        <p className={styles.descripcionMenu}>Explora los registros visuales de los fundadores y los elementos materiales históricos de Chuponal.</p>
        
        <div className={styles.gridOpciones}>
          <div className={styles.tarjetaOpcion} onClick={() => onSeleccionar("habitantes")}>
            <Users size={48} className={styles.iconoTarjeta} />
            <h3>Galería de Primeros Habitantes</h3>
          </div>
          <div className={styles.tarjetaOpcion} onClick={() => onSeleccionar("objetos")}>
            <Package size={48} className={styles.iconoTarjeta} />
            <h3>Objetos Históricos</h3>
          </div>
        </div>

        <div className={styles.enrutamiento} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Botón de Información añadido aquí */}
          <button 
            className={styles.botonVolver} 
            onClick={() => setMostrarInfo(true)}
            style={{ background: "#333", borderColor: "#555" }}
          >
            <Info size={18} /> Información de la Web
          </button>

          <button className={styles.botonVolver} onClick={onVolver}>
            <ArrowLeft size={18} /> Volver a Lectura
          </button>
        </div>
      </main>
    </div>
  );
}