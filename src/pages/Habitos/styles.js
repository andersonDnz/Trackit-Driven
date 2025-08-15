import styled from "styled-components";



export const Container = styled.div`
  background-color: #f2f2f2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 70px 20px 0 20px; 
  box-sizing: border-box;
`;

export const Content = styled.div`
  flex: 1;
  padding-bottom: 100px; 
`;


export const Header = styled.div`
   display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-size: 24px;
    color: #126BA5;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    border-radius: 4.64px;
    background-color: #52B6FF;
    border: none;
    color: white;
    font-size: 26px;
    cursor: pointer;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background: #fff;
  padding: 15px;
  border-radius: 5px;

  input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    padding: 0 11px;
    font-size: 20px;
    color: #666;
    background-color: white;

    &::placeholder {
      color: #DBDBDB;
    }
  }
`;


export const DaysContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 15px;
  flex-wrap: wrap; 
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
  align-items: center;
  gap: 20px;

  span {
    font-size: 16px;
    color: #52b6ff;
    cursor: pointer;
  }

  button {
    background: #52b6ff;
    border: none;
    color: white;
    padding: 8px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:disabled {
      background: #a0d4ff;
      cursor: not-allowed;
    }
  }
`;


export const HabitCard = styled.div`
  background-color: white;
  padding: 1px;
  margin-bottom: 10px;
  border-radius: 5px;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #666;
  }
`;


export const EmptyMessage = styled.p`
  text-align: left;
  margin-top: 20px;
  color: #666;
  font-size: 14px;
`;
