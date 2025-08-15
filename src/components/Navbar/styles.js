import styled from "styled-components";


export const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #126BA5;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    object-fit: cover;
  }

  button {
    margin-right: 20px;
  }
  
`;

export const Tittle = styled.h1`
width: 97;
height: 49;
top: 10px;
left: 18px;
opacity: 1;
font-family: "Playball";
font-weight: 400;
font-size: 38.98px;
line-height: 100%;
letter-spacing: 0%;
`
export const UserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  object-fit: cover;
`;
