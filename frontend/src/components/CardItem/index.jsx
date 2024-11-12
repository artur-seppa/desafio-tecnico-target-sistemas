import { React, useState, useEffect } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

import { api } from "../../services/api";

export const CardItem = ({ titulo, enunciado, endpoint }) => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/${endpoint}`);
                setResponse(response.data);
                // console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [endpoint]);

    const renderResponseEntries = () => {
        if (response.percentuais) {
            return (
                <>
                    <List sx={{ mb: 2 }}>
                        <ListItem key={'total'}>
                            <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                Total Faturamento: R$ {response.totalFaturamento}
                            </Typography>
                        </ListItem>

                        {response.percentuais.map(({ UF, percentual }) => (
                            <ListItem key={UF}>
                                <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                    {UF}:
                                </Typography>
                                <Typography component="span" sx={{ ml: 1 }}>
                                    {percentual}%
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </>
            );
        } else {
            return (
                <List sx={{ mb: 2 }}>
                    {Object.entries(response).map(([key, value]) => (
                        <ListItem key={key}>
                            <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                {key}:
                            </Typography>
                            <Typography component="span" sx={{ ml: 1 }}>
                                {String(value)}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            );
        }
    };

    return (
        <Card sx={{ width: "98%", p: 1 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {titulo}
                </Typography>
                <Typography variant="h6" component="div">
                    Resultado:
                    <List sx={{ mb: 2 }}>
                        {renderResponseEntries()}
                    </List>
                </Typography>
                {/* <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {enunciado}
                </Typography> */}
            </CardContent>
        </Card>
    );
}
