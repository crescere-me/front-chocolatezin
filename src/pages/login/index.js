import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import chocolateImg from '../../assets/images/chocolate.svg';
import { LoginForm } from './style';
import api from '../../services/api';
import {
  localStorageSetItem,
  localStorageGetItem,
} from '../../helper/localStorage';

function Login() {
  const history = useHistory();

  const token = localStorageGetItem();

  if (token) {
    history.push('/');
  }

  const [infos, setInfos] = useState({
    email: '',
    password: '',
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post('/login', infos);

    if (response.status !== 201) {
      return alert('Usuário inválido');
    }

    localStorageSetItem(response.data.token);

    return history.push('/');
  };

  const handleInputChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <GlobalStyle />

      <Container>
        <img src={chocolateImg} alt="Imagem do chocolate" />
        <h1>Login</h1>

        <LoginForm onSubmit={onFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            required
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </LoginForm>
      </Container>
    </div>
  );
}

export default Login;
