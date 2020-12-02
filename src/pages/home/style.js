import styled from 'styled-components';

export const ChocolateList = styled.ul`
  border-top: 1px solid #eee;
  list-style: none;
  margin-top: 20px;

  li {
    & + li {
      margin-top: 10px;
      border-top: 1px solid #eee;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 15px 10px;
      border-radius: 4px;

      h2 {
        margin-bottom: 5px;
      }

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #eee;
      }

      div {
        display: block;
        margin-left: 10px;
      }
    }
  }
`;
