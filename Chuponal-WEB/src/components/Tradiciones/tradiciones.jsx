import { useState } from "react";
import { historicalData } from "../../data/historicalData";
import styles from "../../../scss/Read.module.scss";
import MenuGalerias from "../Galery/menu/menu";
import GaleriaHabitantes from "../Galery/menu/Habitantes/galery";
import GaleriaObjetos from "../Galery/menu/Objetos/objetos";
import {useScrollTop } from "../../hooks/UseScroll"


import { Sparkles,Images,ArrowLeft } from "lucide-react";

export default function TradicionesFe({ onVolver }) {
  const dataSeccion = historicalData.find(item => item.seccion === "tradiciones-fe");
  const [vista, setVista] = useState("lectura");

    useScrollTop();
  if (!dataSeccion) return null;

  if (vista === "menu-galerias") {
    return (
      <MenuGalerias 
        onVolver={() => setVista("lectura")} 
        onSeleccionar={(tipo) => setVista(tipo)} 
      />
    );
  }

  if (vista === "habitantes") {
    return <GaleriaHabitantes onVolver={() => setVista("menu-galerias")} />;
  }

  if (vista === "objetos") {
    return <GaleriaObjetos onVolver={() => setVista("menu-galerias")} />;
  }

  return (
    <div className={styles.contenedorIntroduccion}>
      <main className={styles.bloqueLectura}>
        
        <div className={styles.metaDocumento}>
          <Sparkles size={16} />
          <span>{dataSeccion.subtitulo}</span>
        </div>

        <h2 className={styles.tituloSeccion}>{dataSeccion.titulo}</h2>

        <div className={styles.cuerpoTexto}>
          {dataSeccion.parrafos.map((parrafo, index) => {
            const textoProcesado = parrafo.split(/(\[.*?\])/g).map((fragmento, i) => {
              if (fragmento.startsWith("[") && fragmento.endsWith("]")) {
                return <span key={i} className={styles.notaEdicion}>{fragmento}</span>;
              }
              return fragmento;
            });
            return <p key={index}>{textoProcesado}</p>;
          })}
        </div>

        <div className={styles.enrutamiento} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button className={styles.botonSiguiente} onClick={onVolver}>
            <ArrowLeft className={styles.icono} size={18} />
            Anterior
          </button>

          <button 
            className={styles.botonSiguiente} 
            onClick={() => setVista("menu-galerias")}
            style={{ marginLeft: "auto", background: "#2a2a2a", border: "1px solid #444" }}
          >
            <Images className={styles.icono} size={18} />
            Galerías
          </button>
        </div>

      </main>
    </div>
  );
}