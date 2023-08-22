import React, { useState, useEffect } from 'react';
import { useParams, Container, Typography, Card, CardContent } from '@mui/material';

const SingleTrainPage = () => {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTM5MDIsImNvbXBhbnlOYW1lIjoiQWZmb3JkIG1lZGljYWxzIiwiY2xpZW50SUQiOiI5MDhjZDM0ZC1kZWFhLTRhMzMtYWI2Ny01NjhmYTUyMjU0YjgiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiQTIwMTEwMjYwMTAxMDgifQ.cymDfHFDmuvg-REt9xvhUeKaqlFmLWTQjoifhTSGpqk'; // Replace with your actual authorization token

    // Fetch single train data from your backend API
    const fetchSingleTrain = async () => {
      try {
        const response = await fetch(`http://20.244.56.144/train/trains/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const data = await response.json();
        setTrain(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSingleTrain();
  }, [id]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{train.name} Details</Typography>
      <Card>
        <CardContent>
          <Typography>Price: {train.price}</Typography>
          <Typography>Available Seats: {train.availableSeats}</Typography>
          <Typography>Departure Time: {train.departureTime}</Typography>
          {/* Display other train details */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default SingleTrainPage;
