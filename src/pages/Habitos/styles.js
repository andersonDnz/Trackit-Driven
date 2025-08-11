import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  padding: 20px;
  margin-top: 90px; 
  font-family: 'Lexend Deca', sans-serif;

  p {
    color: #666;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 100%;
  }
`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  margin-top: none;

  h2 {
    font-size: 24px;
    color: #126BA5;
  }

  button {
    display: flex;
    width: 40;
    height: 35;
    top: 92px;
    left: 317px;
    border-radius: 4.64px;
    opacity: 1;
    align-items: center;
    background-color: #52b6ff;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%; 
  align-items: flex-start;
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


export const EmptyMessage = styled.p`
  text-align: left;
  margin-top: 20px;
  color: #666;
  font-size: 14px;
`;
