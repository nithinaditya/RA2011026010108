import React from 'react';
import { Card, CardContent, Typography, Button, makeStyles } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const TrainCard = ({ train }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">{train.name}</Typography>
        <Typography>Departure: {train.departureTime}</Typography>
        <Typography>Price: ${train.price}</Typography>
        <Typography>Seats: {train.availableSeats}</Typography>
        <Button
          component={Link}
          to={`/train/${train.id}`}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default TrainCard;
