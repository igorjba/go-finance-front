import arrowIcon from "../../assets/arrow.svg";
import darkLogoIcon from "../../assets/dark-logo.svg";
import darkModeIcon from "../../assets/dark-mode.svg";
import lightLogoIcon from "../../assets/light-logo.svg";
import lightModeIcon from "../../assets/light-mode.svg";
import { useTheme } from "../../hooks/useTheme";
import { useLocation, useNavigate } from "react-router-dom";
import "../../global/global.css"
import "./style.css";

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const currentModeIcon = theme === 'light' ? darkModeIcon : lightModeIcon;
    const currentLogoIcon = theme === 'light' ? darkLogoIcon : lightLogoIcon;
    const isRootPath = location.pathname === "/"
    const isHomePage = location.pathname === "/home"

    const goToHome = () => {
        navigate("/home");
    };

    return (
        <header >
            <div className="header-container">
                <button className={`landing-back-home-button ${isHomePage ? '' : 'hidden'}`} onClick={goToHome}>
                    <img src={arrowIcon} alt="Back Home Button" />
                </button>
                <button className={`landing-go-home-logo-button ${isRootPath ? 'hidden' : ''}`} onClick={goToHome}>
                    <img src={currentLogoIcon} alt="Go Home Button" />
                </button>
                <button className="landing-toggle-theme-button" onClick={toggleTheme}>
                    <img src={currentModeIcon} alt="Toggle Theme" />
                </button>
            </div>
        </header>
    );
}

export default Header;
