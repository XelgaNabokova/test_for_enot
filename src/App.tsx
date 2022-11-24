import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Body/>
      </Container>
    </div>
  );
}

export default App;
