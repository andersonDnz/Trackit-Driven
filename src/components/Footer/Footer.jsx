import { Link } from "react-router-dom";
import { Container } from "../Footer/styles";

export default function Footer() {
  return (
    <Container>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje">Hoje</Link>
    </Container>
  );
}
