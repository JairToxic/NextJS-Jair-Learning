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