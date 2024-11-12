import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { api } from "../../services/api";

export const CardInterativo = ({ exercicio, titulo, enunciado }) => {
    const [ex, setEx] = useState('');
    const [resposta, setResposta] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.post(`/${exercicio}`);
                setEx(response.data.response);
                console.log(response.data.response);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [exercicio]);

    const handleChange = (event) => {
        setResposta(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await api.post(`/enviar-resposta`, { resposta });
            console.log('Resposta enviada:', response.data);
            alert("Resposta enviada com sucesso!");
        } catch (err) {
            console.error("Erro ao enviar resposta:", err);
        }
    };

    return (
        <Card sx={{ width: "98%", height: "100vh", p: 2 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {titulo}
                </Typography>
                <Typography variant="h5" component="div">
                    {ex}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {enunciado}
                </Typography>
                <TextField
                    label="Sua Resposta"
                    variant="outlined"
                    fullWidth
                    value={resposta}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Enviar Resposta
                </Button>
            </CardActions>
        </Card>
    );
};
