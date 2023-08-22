import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Train Schedule App</Typography>
          <Button component={Link} to="/" color="inherit">
            All Trains
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        <Switch>
          <Route path="/" exact component={AllTrainsPage} />
          <Route path="/train/:id" component={SingleTrainPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
