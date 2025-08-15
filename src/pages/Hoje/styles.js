import styled from "styled-components";



export const Container = styled.div`
  padding: 90px 18px;
  background-color: #F2F2F2;
  min-height: 100vh;
`;


export const Header = styled.div`
  margin-bottom: 28px;

  h2 {
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 5px;
  }

  p {
    font-size: 18px;
    color: #BABABA;

    .gray {
      color: #BABABA;
    }

    span {
      color: #8FC549;
    }
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
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  background-color: ${(props) => (props.done ? "#8fc549" : "#ebebeb")};
  color: white;
  font-size: 24px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
