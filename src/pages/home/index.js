import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import { ChocolateList } from './style';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';
import { localStorageGetItem } from '../../helper/localStorage';

function App() {
  const history = useHistory();

  const token = localStorageGetItem();

  if (!token) {
    history.push('/login');
  }

  const [infos, setInfos] = useState([]);

  const buttonClick = () => {
    async function loadApi() {
      try {
        const response = await api.get('/chocolates');
        setInfos(response.data.chocolates);
      } catch (err) {
        setInfos([]);
      }
    }
    loadApi();
  };

  useEffect(() => {
    (async function loadApi() {
      try {
        const response = await api.get('/chocolates');
        setInfos(response.data.chocolates);
      } catch (err) {
        setInfos([]);
      }
    })();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <img src={chocolateImg} alt="Imagem de chocolate" />
        <h1>Chocolates</h1>

        <ChocolateList>
          {infos.map((info) => (
            // eslint-disable-next-line no-underscore-dangle
            <li key={info._id}>
              <div>
                <img src={info.image} alt="Imagem de chocolate" />
                <div>
                  <h2>{info.name}</h2>
                  <p>
                    <strong>R$:</strong> {info.value}
                  </p>
                  <p>
                    <strong>Marca:</strong> {info.name}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ChocolateList>
        <button type="button" onClick={buttonClick}>
          Clique aqui
        </button>
      </Container>
    </div>
  );
}

export default App;
