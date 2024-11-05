export async function getUsuarios() {
    const res = await fetch('http://localhost:3001/usuarios')
    const data = await res.json();
    return data;
    
}

export async function getPersonas() {
 const resp = await fetch('http://localhost:3001/personas');
 const dataP = await resp.json();
 return dataP;
    
}

export async function getProductos() {
    const prod = await fetch('http://localhost:3001/productos');
    const guardarProd = await prod.json();
    return guardarProd;
    
}

export async function getMarcasCarros() {
    const carros = await fetch('http://localhost:3001/marcas');
    const RData=  await carros.json();
    return RData;
}
export async function getColores() {
    const colores = await fetch('http://localhost:3001/colores');
    const ResColores = await colores.json();
    return ResColores;
}

// UserService.js

export async function addColor(nuevoColor) {
    const response = await fetch('http://localhost:3001/colores', {
        method: 'POST', // Especifica el método como POST
        headers: {
            'Content-Type': 'application/json', // Define que enviarás JSON
        },
        body: JSON.stringify(nuevoColor), // Convierte el objeto a JSON
    });

    const result = await response.json();
    return result; // Retorna la respuesta del servidor (podría ser el color recién creado)
}
