export const validarDireccion = (direccion) => {
    const expresionDireccion = /^([A-Za-z0-9À-ÿ\_\-\.\,\#\s]){0,200}$/;
    return (expresionDireccion.test(direccion)) ? true : false;
}

export const validarCiudad = (ciudad) => {
    const expresionCiudad = /^[a-zA-ZÀ-ÿ\s]{0,40}$/;
    return (expresionCiudad.test(ciudad)) ? true : false;
}

export const validarEstado = (estado) => {
    const expresionEstado =/^[a-zA-ZÀ-ÿ\s]{0,40}$/;
    return (expresionEstado.test(estado)) ? true : false;
}