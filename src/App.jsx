import react from "react";

const app = () => {
  const opciones = async () =>{
    return fetch("https://api.genshin.dev/");
  };
  console.log(opciones()); 
 
  return(
  <div className="container">
    <h1>Genshin Impact Dex</h1>
    <hr/>
  <select>
    <option value="artifacts">Artefactos</option>
    <option value="boss">Jefes</option>
    <option value="characters">Personajes</option>
  </select>
  </div>
  );
}
export default app;