import styled from 'styled-components';

export const TextInput = styled.input`
  background-color: red;
`;

export const LoginForm = styled.form`
  margin-top: 30px;

  input {
    padding: 10px;
    margin: 4px;
    border-radius: 5px;
    width: 300px;
    height: 50px;
    border-color: #855251;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    width: 300px;
    margin: 4px;
    margin-top: 30px;
    background-color: #855251;
    color: #fff;
    height: 50px;
    font-size: 14px;
    border: none;
  }

  button:hover {
    cursor: pointer;
    background-color: #ff9839;
  }

  display: flex;
  flex-direction: column;
`;
