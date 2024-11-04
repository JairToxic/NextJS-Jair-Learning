export async function getUsuarios() {
    const res = await fetch('http://localhost:3001/usuarios')
    const data = await res.json();
    return data;
    
}

