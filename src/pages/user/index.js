import React from 'react';
import { Redirect } from 'react-router-dom';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';

function User() {
  const token = localStorage.getItem('@chocolate-front/token');

  if (!token) {
    console.log('Deu ruim');
    <Redirect to="login" />;
  }

  return (
    <div className="App">
      <GlobalStyle />

      <Container />
    </div>
  );
}

export default User;
