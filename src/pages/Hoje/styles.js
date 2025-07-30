import styled from "styled-components";



export const Container = styled.div`
  padding: 20px;
  font-family: 'Lexend Deca', sans-serif;
`;

export const Header = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    color: #126ba5;
  }

  .gray {
    color: #bababa;
  }

  span {
    color: #8fc549;
    font-size: 16px;
  }
`;

export const HabitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HabitCard = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.05);

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #666;

    span.green {
      color: #8fc549;
    }
  }
`;

export const CheckButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 24px;
  color: white;
  background-color: ${(props) => (props.done ? "#8fc549" : "#ebebeb")};
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;
