import {React, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardItem = ({resultado, enunciado}) => {
    return (
        <Card sx={{ width: "98%", height: "20%" }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Exercício 1
                </Typography>
                <Typography variant="h5" component="div">
                    {resultado}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{enunciado} </Typography>
            </CardContent>
        </Card>
    );
}