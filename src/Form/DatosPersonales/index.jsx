import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {
  const [name, setName] = useState({ value: '', valid: null});
  const [lastName, setLastName] = useState({ value: '', valid: null});
  const [phone, setPhone] = useState({ value: '', valid: null});

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
      onSubmit={(e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={ (input) => {
          const valueName = input.target.value;
          const validName = validarNombre(valueName);
          console.log(validName);
          setName({value: valueName, valid: validName }); 
        }}
        error={name.valid === false}
        helperText={
          name.valid === false && "Ingrese nombres válidos, con un máximo de 40 caracteres"
        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange={ (input) => {
          const valueLastName = input.target.value;
          const validLastName = validarApellido(valueLastName);
          console.log(validLastName);
          setLastName({value: valueLastName, valid: validLastName});
        }}
        error={lastName.valid === false}
        helperText={
          lastName.valid === false && "Ingrese apellidos válidos, con un máximo de 40 caracteres"
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={ (input) => {
          const valuePhone = input.target.value;
          const validPhone = validarTelefono(valuePhone);
          console.log(validPhone);
          setPhone({value: valuePhone, valid: validPhone});
        }}
        error={phone.valid === false}
        helperText={
          phone.valid === false && "Se requiere un número de 10 dígitos"
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
