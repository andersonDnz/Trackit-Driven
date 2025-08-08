import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FooterContainer, FooterButton } from "./styles";
import { FaCalendarAlt, FaCheckSquare } from "react-icons/fa";

export default function Footer() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname.substring(1);
    if (currentRoute === "habitos" || currentRoute === "hoje") {
      setSelected(currentRoute);
    }
  }, [location]);

  const handleNavigation = (route) => {
    if (selected !== route) {
      navigate(`/${route}`);
    }
  };

  return (
    <FooterContainer>
      <FooterButton
        selected={selected === "habitos"}
        onClick={() => handleNavigation("habitos")}
      >
        <FaCalendarAlt />
        Hábitos
      </FooterButton>

      <FooterButton
        selected={selected === "hoje"}
        onClick={() => handleNavigation("hoje")}
      >
        <FaCheckSquare />
        Hoje
      </FooterButton>
    </FooterContainer>
  );
}