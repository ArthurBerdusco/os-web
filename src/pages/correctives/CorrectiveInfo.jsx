import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";


const CorrectiveInfo = () => {
  const [corrective, setCorrective] = useState({});
  const [images, setImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCorrectives = async () => {
      try {
        const response = await fetch(`http://192.168.15.21:8080/corrective/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { data } = await response.json();
        setCorrective(data);
      } catch (error) {
        console.error("Erro ao buscar ordens de serviço:", error.message);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await fetch(`http://192.168.15.21:8080/images/corrective/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { data } = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Erro ao buscar imagens: ", error.message);
      }
    };

    fetchCorrectives();
    fetchImages();
  }, [id]);


  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Detalhes da Ordem de Serviço Corretiva
              </Typography>
              <Typography>
                <strong>Localização:</strong> {corrective.location}
              </Typography>
              <Typography>
                <strong>Torre:</strong> {corrective.tower}
              </Typography>
              <Typography>
                <strong>Andar:</strong> {corrective.floor}
              </Typography>
              <Typography>
                <strong>Área:</strong> {corrective.area}
              </Typography>
              <Typography>
                <strong>Descrição:</strong> {corrective.description}
              </Typography>
              <Typography>
                <strong>Status:</strong> {corrective.status}
              </Typography>
              <Typography>
                <strong>Criada em:</strong> {corrective.created_at}
              </Typography>
              <Typography>
                <strong>Iniciada em:</strong> {corrective.started_at}
              </Typography>
              <Typography>
                <strong>Finalizada em:</strong> {corrective.finished_at}
              </Typography>
              <Typography>
                <strong>Serviço executado:</strong> {corrective.jobDescription}
              </Typography>
              <Typography>
                <strong>Imagens:</strong>
              </Typography>
              <Grid container spacing={2}>
                {images.map((imageName, index) => (
                  <Grid item key={index}>
                    <img
                      src={`http://localhost:8080/corretiva/${imageName}`}
                      alt={`Imagem ${index + 1}`}
                      style={{ maxWidth: "60%", maxHeight: "60%", border: "1px solid #ddd" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CorrectiveInfo;
