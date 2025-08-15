import { Container, Tittle, UserImage } from "./styles";

import { useNavigate } from "react-router-dom";



import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Navbar({ userImage }) {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("trackitUser");
    navigate("/");
  };

  return (
    <Container>
      <Tittle>TrackIt</Tittle>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#52B6FF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "8px 12px",
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "auto",
        }}
      >
        Sair
      </button>
      {userImage && <UserImage src={userImage} alt="Avatar" />}
    </Container>
  );
}
