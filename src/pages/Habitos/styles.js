import styled from "styled-components";



export const Container = styled.div`
  padding: 20px;
  font-family: 'Lexend Deca', sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 24px;
  }

  button {
    background-color: #52b6ff;
    border: none;
    color: white;
    font-size: 24px;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  margin: 20px 0;
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export const DaysContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 10px;
`;

export const DayButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selected ? "#cfcfcf" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#dbdbdb")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  span {
    color: #52b6ff;
    cursor: pointer;
  }

  button {
    background-color: #52b6ff;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 5px;
  }
`;

export const HabitCard = styled.div`
  background-color: white;
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
