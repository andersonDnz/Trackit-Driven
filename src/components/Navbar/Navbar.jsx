import { Container, Tittle, UserImage } from "./styles";

export default function Navbar({ userImage }) {
  return (
    <Container>
      <Tittle>TrackIt</Tittle>
      {userImage && <UserImage src={userImage} alt="Avatar" />}
    </Container>
  );
}