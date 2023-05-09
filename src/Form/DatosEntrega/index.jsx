import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarDireccion, validarCiudad, validarEstado } from "./validaciones";

const DatosEntrega = ({ updateStep }) => {
  const [address, setAddress] = useState({value: '', valid: null});
  const [city, setCity] = useState({value: '', valid: null});
  const [province, setProvince] = useState({value: '', valid: null});
  
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
        updateStep(3);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        onChange={(input) => {
          const valueAddress = input.target.value;
          const validAddress = validarDireccion(valueAddress);
          setAddress({value: valueAddress, valid: validAddress});
        }}
        error={address.valid === false}
        helperText={
          address.valid === false && "Introduzca una dirección correcta, con menos de 200 caracteres"
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(input) => {
          const valueCity = input.target.value;
          const validCity = validarCiudad(valueCity);
          setCity({value: valueCity, valid: validCity});
        }}
        error={city.valid === false}
        helperText={
          city.valid === false && "Introduzca una ciudad válida, con menos de 40 caracteres"
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange={(input) => {
          const valueProvince = input.target.value;
          const validProvince = validarEstado(valueProvince);
          setProvince({value: valueProvince, valid: validProvince});
        }}
        error={province.valid === false}
        helperText={
          province.valid === false && "Introduzca un estado o provincia válida, con menos de 40 caracteres"
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;