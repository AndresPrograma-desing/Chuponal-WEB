import { useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./home.module.scss";
import Footer from "../components/footer/footer";
import ChuponalIntro from "./Chuponal/chuponal";
import Modal from "../components/Modal/modalAdvertencia";
import { MODAL_TEXT, home } from "../const/index";
import { DEVELOPMENT } from "../const/variables";


export default function Home() {
  const [mostrarIntroduccion, setMostrarIntroduccion] = useState(() => localStorage.getItem("mostrarIntroduccion") === "true");
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleEmpezar = () => {
    if (DEVELOPMENT === 1) {
      setMostrarModal(true);
    } else {
      activarSistema();
    }
  };

  const activarSistema = () => {
    setMostrarModal(false);
    setMostrarIntroduccion(true);
    localStorage.setItem("mostrarIntroduccion", "true");
  };

  const handleRegresar = () => {
    setMostrarIntroduccion(false);
    localStorage.setItem("mostrarIntroduccion", "false");
  };

  return (
    <div className={styles.home}>
      {mostrarModal && (
        <Modal 
          mensaje={MODAL_TEXT.text}
          onClose={activarSistema} 
        />
      )}

      {!mostrarIntroduccion ? (
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.subtitulo}>Sistema de Consulta</span>
            <h1 className={styles.titulo}>{home.chuponal.title}</h1>
            <p className={styles.descripcion}>
              {home.chuponal.description}
            </p>
            <button className={styles.botonEmpezar} onClick={handleEmpezar}>
              Empezar <ArrowRight className={styles.icono} size={18} />
            </button>
          </div>
        </header>
      ) : (
        <ChuponalIntro onRegresarHome={handleRegresar} />
      )}
      
      <Footer /> 
    </div>
  );
}