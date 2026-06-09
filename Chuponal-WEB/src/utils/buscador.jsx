// import { useState } from "react";
// import { Search, X } from "lucide-react";
// import { historicalData } from "../data/historicalData";
// import styles from "../../scss/Buscadores/buscador.module.scss";

// export default function Buscador({ onSeleccionar }) {
//   const [query, setQuery] = useState("");
//   const [abierto, setAbierto] = useState(false);

//   // Filtramos los resultados, pero solo si hay una consulta
//   const resultados = query ? historicalData.filter(item => 
//     item.titulo.toLowerCase().includes(query.toLowerCase()) ||
//     item.parrafos.some(p => p.toLowerCase().includes(query.toLowerCase()))
//   ) : [];

//   const handleCerrar = () => {
//     setAbierto(false);
//     setQuery(""); // Limpia la búsqueda al cerrar
//   };

//   return (
//     <div className={`${styles.contenedorBuscador} ${abierto ? styles.abierto : styles.cerrado}`}>
      
//       {/* Botón Lupa Minimalista: Siempre visible si está cerrado */}
//       {!abierto && (
//         <button className={styles.botonLupa} onClick={() => setAbierto(true)}>
//           <Search size={20} className={styles.iconoLupa} />
//         </button>
//       )}

//       {/* Input de Búsqueda Integrado: Se muestra si está abierto */}
//       {abierto && (
//         <div className={styles.inputWrapper}>
//           <input 
//             autoFocus // Enfoca automáticamente al abrir
//             type="text" 
//             placeholder="Buscar sección..." 
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <button className={styles.botonCerrar} onClick={handleCerrar}>
//             <X size={20} />
//           </button>
//         </div>
//       )}

//       {/* Lista de resultados compacta */}
//       {abierto && query && (
//         <div className={styles.listaResultados}>
//           {resultados.length > 0 ? (
//             resultados.map(res => (
//               <div 
//                 key={res.seccion} 
//                 className={styles.resultado} 
//                 onClick={() => { onSeleccionar(res.seccion); handleCerrar(); }}
//               >
//                 <h4>{res.titulo}</h4>
//               </div>
//             ))
//           ) : (
//             <div className={styles.resultado} style={{cursor: 'default'}}><small>Sin resultados</small></div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }