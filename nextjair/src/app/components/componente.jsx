import { useEffect, useState } from 'react'; // Importamos useEffect y useState
import { getUsuarios } from '../services/UserService';



// Componente principal de la página
export default function Usuarios() {
    // Creamos un estado llamado "usuarios" para guardar la lista de usuarios
    const [usuarios, setUsuarios] = useState([]);

// useEffect se ejecuta una vez cuando el componente se monta
useEffect(() => {
    async function fetchData() {
      // Llamamos a getUsuarios para obtener los datos de la API
      const data = await getUsuarios();
      // Guardamos los datos obtenidos en el estado
      setUsuarios(data);
    }
    fetchData();
  }, []); // El array vacío significa que esto solo corre una vez al montarse
 // Renderizamos la interfaz
 return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
}