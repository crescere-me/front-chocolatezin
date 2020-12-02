import React, { useEffect, useState } from 'react';
import GlobalStyle from '../../styles/global';
import { Container } from '../../components/container';
import { ChocolateList } from './style';
import chocolateImg from '../../assets/images/chocolate.svg';
import api from '../../services/api';

function App() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function loadApi() {
      try {
        const response = await api.get('/posts');
        setInfos(response.data);
      } catch (err) {
        setInfos([]);
      }
    }
    loadApi();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <img src={chocolateImg} alt="Imagem de chocolate" />
        <h1>Chocolates</h1>

        <ChocolateList>
          {infos.map((info) => (
            <li key={info.id}>
              <div>
                <img src={chocolateImg} alt="Imagem de chocolate" />
                <div>
                  <h2>{info.title}</h2>
                  <p>{info.id}</p>
                  <p>{info.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ChocolateList>
      </Container>
    </div>
  );
}

export default App;
