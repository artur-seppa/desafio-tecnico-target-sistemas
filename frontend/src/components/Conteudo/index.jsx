import {React, useState, useEffect} from 'react';
import { Card, Box } from '@mui/material';
import { CardItem } from '../CardItem'

import { api } from "../../services/api";

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
    <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
      <Card variant="outlined" sx={{
        width: '100%',
        height: '80%',
        p: 2,
        backgroundColor: "#2196f3",
        display: 'flex', justifyContent: 'center'
      }}>
        <CardItem resultado={ex1} enunciado={"Resultado de SOMA"}/>
      </Card>

      <Card variant="outlined" sx={{
        width: '100%',
        height: '80%',
        p: 2,
        backgroundColor: "#2196f3",
        display: 'flex', justifyContent: 'center'
      }}>
        <CardItem resultado={ex1} enunciado={"Resultado de SOMA"}/>
      </Card>
    </Box>
  );
}
