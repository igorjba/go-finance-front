import AlertList from "../../components/Alerts/AlertList";
import Header from "../../components/Header";
import "./style.css";

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Header />
            <AlertList />
        </div>
    );
}
export default Home;