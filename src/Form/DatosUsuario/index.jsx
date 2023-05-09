import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./Validaciones";

const DatosUsuario = ({updateStep}) => {
  const [email, setEmail] = useState({value: "", valid: null});
  const [password, setPassword] = useState({value: "", valid: null});

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={ (e) => {
        e.preventDefault();
        if(email.valid && password.valid){
          console.log(email, password);
          updateStep(1);
        }else{
          console.log("Algo anda mal");
        }
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid == false}  
        helperText={(email.valid == false) && "Formato de e-mail: usuario@dominio.com"}
        value={ email.value }
        onChange={ (input) => {
          const email = input.target.value;
          let validacionEmail = validarEmail(email)
          setEmail( {value: email, valid: validacionEmail} )
      }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid == false}
        helperText={(password.valid == false) && "Formato: 8 a 45 caracteres, con mínimo 1 mayúscula, 1 minúscula, 1 caracter especial"}
        value={password.value }
        onChange={ (input) => {
          const password = input.target.value;
          let validacionPassword = validarPassword(password);
          setPassword( {value: password, valid: validacionPassword} )
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}

export default DatosUsuario;
