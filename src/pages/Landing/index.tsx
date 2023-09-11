import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import darkLogoIcon from "../../assets/dark-logo.svg";
import lightLogoIcon from "../../assets/light-logo.svg";
import Header from "../../components/Header";
import "../../global/global.css";
import { useTheme } from "../../hooks/useTheme";
import "./style.css";

export default function Landing() {
  const { theme } = useTheme();
  const navigate = useNavigate()
  const [currentLogoIcon, setCurrentLogoIcon] = useState(theme === 'light' ? darkLogoIcon : lightLogoIcon);

  useEffect(() => {
    console.log(`O tema atual é: ${theme}`);
    setCurrentLogoIcon(theme === 'light' ? darkLogoIcon : lightLogoIcon);
  }, [theme]);

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="landing-container">
      <Header />
      <div className="landing-body">
        <div className="landing-go-home-logo-button" onClick={goToHome}>
          <img src={currentLogoIcon} alt="Go Home Button" />
        </div>
      </div>
    </div>
  );
}
