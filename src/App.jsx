import { useEffect, useState} from "react";
import {fetchHelper} from "./helpers/fetchHelper";

const tipos = {
  artifacs: "artefactos",
  boss: "jefes",
  characters: "personajes",
  consumables: "consumibles",
  domains: "Dominios",
  elements: "elementos",
  enemies: "enemigos",
  materials: "materiales",
  nations: "naciones",
  weapons: "armas",
};

const app = () => {
  const [selects, setSelects]= useState({
    types: [],
  });

  
  const fetchTypes = async () => {
    const respuesta = await fetchHelper("https:/a/pi.genshin.dev/");
    const {types} = await respuesta.json();
    console.log({ types });
    setSelects({...selects, types });
  };

  useEffect(() => {
    fetchTypes().catch(console.error);
  }, []);

  return(
  <div className="container">
    <h1>Genshin Impact Dex</h1>
    <hr/>
  <select>
    <option value="">Seleciones el tipo de informacion</option>
    {selects.types.map((type) => (
      <option value={type}>{tipos[type]}</option>
    ))}
  </select>
  </div>
  );
};

export default app;