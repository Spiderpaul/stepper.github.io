export const validarEmail = (email) => {
    const expresionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return (expresionEmail.test(email)) ? true : false;
};

export const validarPassword = (password) => {
    const expresionPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&-]{8,45}$/;
    return (expresionPassword.test(password)) ? true : false;
};

export const validarNombre = (nombre) => {
    const expresionNombre = /^[a-zA-ZÀ-ÿ\s]{0,40}$/;
    return (expresionNombre.test(nombre)) ? true : false;
};

export const validarApellido = (apellido) => {
    const expresionApellido = /^[a-zA-ZÀ-ÿ\s]{0,40}$/;
    return (expresionApellido.test(apellido)) ? true : false;
};

export const validarTelefono = (telefono) => {
    const expresionTelefono = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/
    return (expresionTelefono.test(telefono)) ? true : false;
}; 

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