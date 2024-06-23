import { Box, Button, TextField } from "@mui/material";
import React from "react";

//por conectar con la api functions >>routes >> retiro
export const Deposito = () => {

    return(
        <Box>
            <TextField type="text" placeholder="Monto a retirar"></TextField>
            <TextField type="text" placeholder="Nro de tarjeta"></TextField>
            <TextField type="text" placeholder="CVV"></TextField>
           <Button >Retirar</Button>

        </Box>
    )
};

