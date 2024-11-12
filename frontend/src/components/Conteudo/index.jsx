import { React, useState, useEffect } from 'react';
import { Card, Box } from '@mui/material';
import { CardItem } from '../CardItem';
import { CardInterativo } from '../CardInterativo';
import { api } from "../../services/api";
import { Navegation } from '../Navegation';

export const Conteudo = () => {
  const [ex1, setEx1] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/ex1");
        setEx1(response.data.response);
        console.log(ex1);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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

        {/* <CardItem titulo={"Exercício 1"} resultado={ex1} enunciado={"Resultado de SOMA"} />
        <CardInterativo titulo={"Exercício 2"} exercicio="ex2" enunciado={"Resolva o Exercício 2"} />
        
        <CardItem titulo={"Exercício 1"} resultado={ex1} enunciado={"Resultado de SOMA"} />
        <CardItem titulo={"Exercício 1"} resultado={ex1} enunciado={"Resultado de SOMA"} />
        <CardItem titulo={"Exercício 1"} resultado={ex1} enunciado={"Resultado de SOMA"} /> */}
      </Card>
    </Box>
  );
};
