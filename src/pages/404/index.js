import React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyle from '../../styles/global';
import { PageTitle } from './style';
import { Container } from '../../components/container';

function NotFound() {
  return (
    <div className="App">
      <GlobalStyle />

      <Container>
        <PageTitle> 404 not found! </PageTitle>

        <Link to="/login"> Vá para o login </Link>
      </Container>
    </div>
  );
}

export default NotFound;
