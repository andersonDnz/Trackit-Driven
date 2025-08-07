import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: white;
  font-size: 18px;
  color: #52B6FF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
`;