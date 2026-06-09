import { useState, useEffect } from "react";
import { ArrowRight, FileText, Home } from "lucide-react";
import { historicalData } from "../../data/historicalData";
import styles from "./Index.module.scss";  

import Asentamientos from "../../components/Asentamientos/acentamientos";
import Origen from "../../components/OrigenNombre/origen.jsx";
import Familias from "../../components/Familias/familia.jsx";
import Casas from "../../components/Casas/casas.jsx";
import Terrenos from "../../components/Terrenos/terrenos.jsx";
import Vias from "../../components/Vias/vias.jsx";
import Desarrollo from "../../components/desarrollo/desarrollo.jsx";
import Tradiciones from "../../components/Tradiciones/tradiciones.jsx";

export default function ChuponalIntro({ onRegresarHome }) { 
  const [seccionActual, setSeccionActual] = useState(() => {
    return localStorage.getItem("seccionActual") || "introduccion";
  });

  const dataIntro = historicalData.find(item => item.seccion === "introduccion");

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("seccionActual", seccionActual);
  }, [seccionActual]);

  const handleVolverAlHome = () => {
    localStorage.removeItem("seccionActual");
    localStorage.removeItem("mostrarIntroduccion");
    if (onRegresarHome) onRegresarHome();
  };

  if (seccionActual === "asentamientos") {
    return (
      <Asentamientos 
        onVolver={() => setSeccionActual("introduccion")} 
        onSiguiente={() => setSeccionActual("origen-nombre")} 
      />
    );
  }

  if (seccionActual === "origen-nombre") {
    return (
      <Origen 
        onVolver={() => setSeccionActual("asentamientos")} 
        onSiguiente={() => setSeccionActual("familias-productividad")} 
      />
    );
  }

  if (seccionActual === "familias-productividad") {
    return (
      <Familias 
        onVolver={() => setSeccionActual("origen-nombre")} 
        onSiguiente={() => setSeccionActual("oro-marron-viviendas")} 
      />
    );
  }

  if (seccionActual === "oro-marron-viviendas") {
    return (
      <Casas 
        onVolver={() => setSeccionActual("familias-productividad")} 
        onSiguiente={() => setSeccionActual("terrenos-servicios")} 
      />
    );
  }

  if (seccionActual === "terrenos-servicios") {
    return (
      <Terrenos 
        onVolver={() => setSeccionActual("oro-marron-viviendas")} 
        onSiguiente={() => setSeccionActual("vias-salud-educacion")} 
      />
    );
  }

  if (seccionActual === "vias-salud-educacion") {
    return (
      <Vias 
        onVolver={() => setSeccionActual("terrenos-servicios")} 
        onSiguiente={() => setSeccionActual("desarrollo-estudiantil")} 
      />
    );
  }

  if (seccionActual === "desarrollo-estudiantil") {
    return (
      <Desarrollo 
        onVolver={() => setSeccionActual("vias-salud-educacion")} 
        onSiguiente={() => setSeccionActual("tradiciones-fe")} 
      />
    );
  }

  if (seccionActual === "tradiciones-fe") {
    return (
      <Tradiciones 
        onVolver={() => setSeccionActual("desarrollo-estudiantil")} 
      />
    );
  }

  if (!dataIntro) return null;

  return (
    <div className={styles.contenedorIntroduccion}>
      <main className={styles.bloqueLectura}>
        
        <div className={styles.metaDocumento}>
          <FileText size={16} />
          <span>{dataIntro.subtitulo}</span>
        </div>

        <h2 className={styles.tituloSeccion}>{dataIntro.titulo}</h2>

        <div className={styles.cuerpoTexto}>
          {dataIntro.parrafos.map((parrafo, index) => {
            const textoProcesado = parrafo.split(/(\[.*?\])/g).map((fragmento, i) => {
              if (fragmento.startsWith("[") && fragmento.endsWith("]")) {
                return <span key={i} className={styles.notaEdicion}>{fragmento}</span>;
              }
              return fragmento;
            });

            return <p key={index}>{textoProcesado}</p>;
          })}
        </div>

        <div className={styles.enrutamiento} style={{ display: "flex", justifyContent: "space-between" }}>
          <button className={styles.botonSiguiente} onClick={handleVolverAlHome}>
            <Home className={styles.icono} size={18} />
            Home
          </button>
          
          <button className={styles.botonSiguiente} onClick={() => setSeccionActual("asentamientos")}>
            Siguiente
            <ArrowRight className={styles.icono} size={18} />
          </button>
        </div>

      </main>
    </div>
  );
}