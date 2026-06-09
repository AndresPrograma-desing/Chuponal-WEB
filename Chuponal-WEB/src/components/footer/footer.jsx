import { GitBranch, Milestone} from "lucide-react";
import styles from "./footer.module.scss";
import {home} from "../../const/index";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <p className={styles.creditos}>
          Plataforma desarrollada por{" "}
          <span className={styles.autor}>{home.developer}</span>
        </p>
        
        <a 
          href="https://github.com/AndresPrograma-desing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.enlaceGithub}
          title="Ver repositorio en GitHub"
        >
          <Milestone size={18} />
            <span>{home.version}</span>

          <GitBranch size={18} />
          <span>Repositorio</span>
        </a>
      </div>
    </footer>
  );
}