import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, Container, IconButton, Box, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';

const getStatusColor = (status) => {
    switch (status) {
        case "COMPLETED":
            return "green";
        case "IN_PROGRESS":
            return "blue";
        case "PENDING":
            return "red";
        default:
            return "gray";
    }
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const Correctives = () => {
    const [correctives, setCorrectives] = useState([]);

    useEffect(() => {
        const fetchCorrectives = async () => {
            try {
                const response = await fetch("http://192.168.15.21:8080/correctives");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const { data } = await response.json();
                console.log(data);
                setCorrectives(data);
            } catch (error) {
                console.error("Erro ao buscar ordens de serviço:", error.message);
            }
        };

        fetchCorrectives();
    }, []);

    return (
        <Container>
            <Grid container spacing={2}>
                {correctives &&
                    correctives.map((corrective) => (
                        <Grid item key={corrective.id} xs={12} sm={6} md={4}>
                            <Card>
                                <Link to={`/corretivas/${corrective.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <CardContent>
                                        <div style={{ marginBottom: 16 }}>
                                            <Typography variant="h6" gutterBottom>
                                                {corrective.id + ": " + corrective.description}
                                            </Typography>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                            <div
                                                style={{
                                                    width: 16,
                                                    height: 16,
                                                    borderRadius: '50%',
                                                    backgroundColor: getStatusColor(corrective.status),
                                                    marginRight: 8,
                                                }}
                                            />
                                            <Typography color="textSecondary">
                                                {corrective.location}
                                            </Typography>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                            <Box>
                                                <AccessTimeIcon />
                                            </Box>
                                            <Typography color="textSecondary" variant="caption" style={{ marginLeft: 8 }}>
                                                Criado em: {formatDate(corrective.created_at)}
                                            </Typography>
                                        </div>
                                        {corrective.started_at && (
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                                <Box>
                                                    <ScheduleIcon />
                                                </Box>
                                                <Typography color="textSecondary" variant="caption" style={{ marginLeft: 8 }}>
                                                    Iniciado em: {formatDate(corrective.started_at)}
                                                </Typography>
                                            </div>
                                        )}
                                        {corrective.finished_at && (
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                                <Box>
                                                    <ScheduleIcon />
                                                </Box>
                                                <Typography color="textSecondary" variant="caption" style={{ marginLeft: 8 }}>
                                                    Concluído em: {formatDate(corrective.finished_at)}
                                                </Typography>
                                            </div>
                                        )}
                                        {corrective.tech_id && (
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Box>
                                                    <PersonIcon />
                                                </Box>
                                                <Typography color="textSecondary" variant="caption" style={{ marginLeft: 8 }}>
                                                    Técnico: {corrective.tech_id}
                                                </Typography>
                                            </div>
                                        )}
                                    </CardContent>
                                </Link>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
};

export default Correctives;
