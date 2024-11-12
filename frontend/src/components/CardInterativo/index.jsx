import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, CardActions } from '@mui/material';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { api } from "../../services/api";

export const CardInterativo = ({ titulo, enunciado, inputType, endpoint }) => {
    const [resposta, setResposta] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleChange = (event) => {
        setResposta(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await api.post(`/${endpoint}`, { resposta });
            console.log('Resposta enviada:', response.data);
            setMensagem(response.data.message); // Atualiza a mensagem para exibir
        } catch (err) {
            console.error("Erro ao enviar resposta:", err);
            setMensagem("Erro ao enviar resposta."); // Mensagem de erro
        }
    };

    return (
        <Card sx={{ width: "98%", p: 2 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {titulo}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {enunciado}
                </Typography>
                <TextField
                    label="Entrada"
                    variant="outlined"
                    fullWidth
                    type={inputType === 'number' ? 'number' : 'text'}
                    value={resposta}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
                {/* Exibe a mensagem abaixo do campo de entrada */}
                {mensagem && (
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        Resposta: {mensagem}
                    </Alert>
                )}
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Enviar Resposta
                </Button>
            </CardActions>
        </Card>
    );
};