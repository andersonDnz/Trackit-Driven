import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Lexend Deca', sans-serif;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #52b6ff;
    color: white;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;