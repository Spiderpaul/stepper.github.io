export const validarEmail = (email) => {
    const expresionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return (expresionEmail.test(email)) ? true : false;
};

export const validarPassword = (password) => {
    const expresionPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&-]{8,45}$/;
    return (expresionPassword.test(password)) ? true : false;
};