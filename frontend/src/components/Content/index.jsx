import { React, useState, useEffect } from 'react';
import { Card, Box } from '@mui/material';
import { Navegation } from '../Navegation';

export const Content = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                gap: 2,
                p: 2,
                overflowY: 'auto', // Adiciona rolagem vertical se necessário
            }}
        >
            <Card variant="outlined" sx={{
                width: '80%',
                maxHeight: '90vh', // Limita a altura máxima do Card para evitar que ocupe toda a tela
                p: 2,
                backgroundColor: "#2196f3",
                display: 'flex',
                flexDirection: 'column', // Coloca os itens em coluna dentro do Card
                gap: 2,
                overflowY: 'auto', // Permite rolagem caso os itens ultrapassem o espaço
            }}>
                <Navegation />
            </Card>
        </Box>
    );
};