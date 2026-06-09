import { useState } from "react";
import { ArrowRight, ArrowLeft, Users } from "lucide-react";
import { historicalData } from "../../data/historicalData";
import styles from "../../../scss/Read.module.scss";
import {useScrollTop } from "../../hooks/UseScroll"


import OroMarronViviendas from "../Casas/casas";

export default function FamiliasProductividad({ onVolver }) {
  const dataFamilias = historicalData.find(item => item.seccion === "familias-productividad");
  const [mostrarSiguiente, setMostrarSiguiente] = useState(false);

    useScrollTop();
  if (!dataFamilias) return null;

  return (
    <>
      {!mostrarSiguiente ? (
        <div className={styles.contenedorIntroduccion}>
          <main className={styles.bloqueLectura}>
            
            <div className={styles.metaDocumento}>
              <Users size={16} />
              <span>{dataFamilias.subtitulo}</span>
            </div>

            <h2 className={styles.tituloSeccion}>{dataFamilias.titulo}</h2>

            <div className={styles.cuerpoTexto}>
              {dataFamilias.parrafos.map((parrafo, index) => {
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
        <OroMarronViviendas onVolver={() => setMostrarSiguiente(false)} />
      )}
    </>
  );
}