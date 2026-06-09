import { useState } from "react";
import { ArrowRight, ArrowLeft, HeartPulse } from "lucide-react";
import { historicalData } from "../../data/historicalData";
import styles from "../../../scss/Read.module.scss";
import {useScrollTop } from "../../hooks/UseScroll"


import DesarrolloEstudiantil from "../desarrollo/desarrollo";

export default function ViasSaludEducacion({ onVolver }) {
  const dataSeccion = historicalData.find(item => item.seccion === "vias-salud-educacion");
  const [mostrarSiguiente, setMostrarSiguiente] = useState(false);

    useScrollTop();
  if (!dataSeccion) return null;

  return (
    <>
      {!mostrarSiguiente ? (
        <div className={styles.contenedorIntroduccion}>
          <main className={styles.bloqueLectura}>
            
            <div className={styles.metaDocumento}>
              <HeartPulse size={16} />
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

            <div className={styles.enrutamiento}>
              <button className={styles.botonSiguiente} onClick={onVolver}>
                <ArrowLeft className={styles.icono} size={18} />
                Anterior
              </button>
              <button className={styles.botonSiguiente} onClick={() => setMostrarSiguiente(true)}>
                Siguiente
                <ArrowRight className={styles.icono} size={18} />
              </button>
            </div>

          </main>
        </div>
      ) : (
        <DesarrolloEstudiantil onVolver={() => setMostrarSiguiente(false)} />
      )}
    </>
  );
}