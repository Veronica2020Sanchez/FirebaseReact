import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";

//por conectar con la api //Function >>index
export const Deposito = () => {
    const [nombreUser, setnombreUser] = useState('');
    const [saldo, setsaldo] = useState(100000);
    const transactions = [

        {
            descripcion: "Persona1",
            value: 1000,
        },
        {
            descripcion: "Persona2",
            value: 1200,
        }
    ]
    return (
        <Container>
            <Box>
                Hola, {nombreUser}
            </Box>

            <Box bgcolor={'blue'} >
                <Box>
                    Mi saldo
                </Box>
                <Box>
                    {saldo}
                </Box>


            </Box>

            <Box>
                <Typography>Mis transacciones</Typography>
            </Box>
            <Box>
                {(options.map((o, index) =>
                    <MenuItem key={index} value={o.value} sx={{
                        color: '#232323',
                        textAlign: 'center',
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 300,
                        lineHeight: '20px',
                    }}>
                        {o.descripcion}
                    </MenuItem>
                ))}
            </Box>
        </Container>



    )
}