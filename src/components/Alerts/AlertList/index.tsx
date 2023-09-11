import "./style.css";

const AlertList: React.FC = () => {
    return (
        <div className="alert-list-container">
            <h1>Detalhes</h1>

            <div className="alert-item">
                <div className="tittle-container">
                    <h2>Título</h2>
                    <span>Uso indevido em anúncio do google</span>
                </div>
                <div className="id-container">
                    <h2>Id</h2>
                    <span>0000001</span>
                </div>
                <div className="status-container">
                    <h2>Status</h2>
                    <span>Em análise</span>
                </div>
            </div>
        </div>
    );
}

export default AlertList;
