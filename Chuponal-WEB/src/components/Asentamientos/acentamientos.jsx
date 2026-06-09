import { useState } from "react";
import { ArrowRight, ArrowLeft, Trees } from "lucide-react";
import { historicalData } from "../../data/historicalData";
import styles from "../../../scss/Read.module.scss";
import {useScrollTop } from "../../hooks/UseScroll"

import Origen from "../OrigenNombre/origen";


export default function OrigenNombre({ onVolver }) {
  const dataOrigen = historicalData.find(item => item.seccion === "asentamientos");
  const [mostrarFamilias, setMostrarFamilias] = useState(false);
  
  useScrollTop();
  if (!dataOrigen) return null;

  return (
    <>
      {!mostrarFamilias ? (
        <div className={styles.contenedorIntroduccion}>
          <main className={styles.bloqueLectura}>
            
            <div className={styles.metaDocumento}>
              <Trees size={16} />
              <span>{dataOrigen.subtitulo}</span>
            </div>

            <h2 className={styles.tituloSeccion}>{dataOrigen.titulo}</h2>

            <div className={styles.cuerpoTexto}>
              {dataOrigen.parrafos.map((parrafo, index) => {
                const textoProcesado = parrafo.split(/(\[.*?\])/g).map((fragmento, i) => {
                  if (fragmento.startsWith("[") && fragmento.endsWith("]")) {
                    return <span key={i} className={styles.notaEdicion}>{fragmento}</span>;
                  }
                  return fragmento;
                });

                return <p key={index}>{textoProcesado}</p>;
              })}
            </div>

            <div className={styles.enrutamiento}>
              <button className={styles.botonSiguiente} onClick={onVolver}>
                <ArrowLeft className={styles.icono} size={18} />
                Anterior
              </button>
              <button className={styles.botonSiguiente} onClick={() => setMostrarFamilias(true)}>
                Siguiente
                <ArrowRight className={styles.icono} size={18} />
              </button>
            </div>

          </main>
        </div>
      ) : (
        <Origen onVolver={() => setMostrarFamilias(false)} />
      )}
    </>
  );
}