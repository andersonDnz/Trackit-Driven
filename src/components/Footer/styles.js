import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
`;

export const FooterButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  background-color: ${(props) => (props.selected ? "#52B6FF" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#B3B3B3")};

  svg {
    font-size: 18px;
    color: ${(props) => (props.selected ? "#fff" : "#B3B3B3")};
  }
`;