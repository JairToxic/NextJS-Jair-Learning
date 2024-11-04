import React, { useEffect, useState } from 'react';
import { getPersonas, getProductos } from '../services/UserService';



function ListaProductos() {
  // Estado para guardar la lista de personas
  const [prodcutos,setProductos] = useState([]);
  const [personas, setPersonas] = useState([]);

  // Llamada al servicio para obtener los datos de las personas
  useEffect(() => {
    async function fetchData() {
      const data = await getPersonas();
      setPersonas(data);
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function fetchData1() {
        const jair = await getProductos();
        setProductos(jair)
        
    }fetchData1();
    },  []);
  

  

  // Renderizamos la interfaz
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {prodcutos.map((prodcutos) => (
          <li key={prodcutos.id}>
            <p><strong>Nombre:</strong> {prodcutos.nombre}</p>
            <p><strong>precio:</strong> {prodcutos.precio}</p>
            <p><strong>categoria:</strong> {prodcutos.categoria}</p>
            <hr />
          </li>
        ))}
      </ul>

      <ul>
        {prodcutos.map((prodcutos) => (
          <li key={prodcutos.id}>
            <p><strong>Nombre:</strong> {prodcutos.nombre}</p>
            <p><strong>precio:</strong> {prodcutos.precio}</p>
            <p><strong>categoria:</strong> {prodcutos.categoria}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
