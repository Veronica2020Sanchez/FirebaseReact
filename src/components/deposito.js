import { Box, Button, TextField } from "@mui/material";
import React from "react";

//por conectar con la api functions >>routes >> deposito


export const Depositar = () => {

    return(
        <Box>
            <TextField type="text" placeholder="Monto a depositar"></TextField>
            <TextField type="text" placeholder="Nro de cuenta"></TextField>
            <TextField type="text" placeholder="CVV"></TextField>
           <Button >Depositar</Button>

        </Box>
    )
};

