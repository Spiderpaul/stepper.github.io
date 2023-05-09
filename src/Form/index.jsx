import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import { validarEmail, validarPassword, validarNombre, validarApellido, validarDireccion, validarCiudad, validarEstado } from "./validaciones";
import Step from "./Step";

const Form = () => {
  const [step, setStep] = useState(0);
  //step = 0 --> <DatosUsuario />
  //step = 1 --> <DatosPersonales />
  //step = 2 --> <DatosEntrega />
  //step = 3 --> <Complete />

  const updateStep = (step) =>{
    setStep(step);
  }
  
  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete />,
  }

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value);
    
  };

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Formato de e-mail: usuario@dominio.com",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Formato: 8 a 45 caracteres, con mínimo 1 mayúscula, 1 minúscula, 1 caracter especial",
          validator: validarPassword,
        }
      ],
      buttonText: "Siguiente",
      onSubmit: ""
    },
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/paul-logo.png"} />
        <Typography variant="h3" color="#4A678E">MyFood</Typography>
      </LogoSpace>
      <FormSpace>
        { step < 3 && <Stepper step={step} />}
        { steps[step] }
        {/* <Step data={stepsFlow[step]} step={step}/> */}
      </FormSpace>
    </Box>
  );
};

export default Form;