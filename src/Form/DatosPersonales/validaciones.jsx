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
