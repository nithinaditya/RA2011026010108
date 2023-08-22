import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import TrainCard from './components/TrainCard';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTM5MDIsImNvbXBhbnlOYW1lIjoiQWZmb3JkIG1lZGljYWxzIiwiY2xpZW50SUQiOiI5MDhjZDM0ZC1kZWFhLTRhMzMtYWI2Ny01NjhmYTUyMjU0YjgiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiQTIwMTEwMjYwMTAxMDgifQ.cymDfHFDmuvg-REt9xvhUeKaqlFmLWTQjoifhTSGpqk'; // Replace with your actual authorization token

    // Fetch train data from your backend API
    const fetchTrains = async () => {
      try {
        const response = await fetch('http://20.244.56.144/train/trains', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const data = await response.json();
        setTrains(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>All Trains Schedule</Typography>
      <Grid container spacing={2}>
        {trains.map(train => (
          <Grid key={train.id} item xs={12} sm={6} md={4} lg={3}>
            <TrainCard train={train} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllTrainsPage;
