import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import { CardItem } from '../CardItem';
import { CardInterativo } from '../CardInterativo';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: 'white' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Começa invisível e abaixo
            animate={{ opacity: 1, y: 0 }} // Anima para visível e posição original
            exit={{ opacity: 0, y: -20 }} // Anima para invisível e acima ao sair
            transition={{ duration: 0.3 }} // Duração da animação
          >
            {children}
          </motion.div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Navegation = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'primary.main', color: 'white' }}>
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Desafio Target Sistemas
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ opacity: 0.8 }}>
          Escolha uma aba para visualizar o conteúdo
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: 'white',
            },
          }}
        >
          <Tab label="Exercício 1" {...a11yProps(0)} sx={{ color: 'white' }} />
          <Tab label="Exercício 2" {...a11yProps(1)} sx={{ color: 'white' }} />
          <Tab label="Exercício 3" {...a11yProps(2)} sx={{ color: 'white' }} />
          <Tab label="Exercício 4" {...a11yProps(3)} sx={{ color: 'white' }} />
          <Tab label="Exercício 5" {...a11yProps(4)} sx={{ color: 'white' }} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CardItem titulo={"Exercicío 1"} endpoint={"ex1"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CardInterativo titulo={"Exercicío 2"} enunciado={"Insira um número para verificar se pertence a sequência de Fibonacci."} inputType={"number"} endpoint={"ex2"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CardItem titulo={"Exercicío 3"} endpoint={"ex3"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CardItem titulo={"Exercicío 4"} endpoint={"ex4"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <CardInterativo titulo={"Exercicío 5"} enunciado={"Insira uma string para ver o retorno dela."} inputType={"string"} endpoint={"ex5"} />
      </CustomTabPanel>
    </Box>
  );
};