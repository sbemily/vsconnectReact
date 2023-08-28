//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useEffect, useState } from "react";

//estilização
import "./style.css";

//axios
import api from "../../utils/api";

function VisualizarServico() {
    const { idServico } = useParams()

    // const titulo = "";
    const [titulo, setTitulo] = useState<string>("");
    const [proposta, setProposta] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [listaSkills, setListaSkills] = useState<string[]>([])

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{titulo}</h2>
                        <span>R$ {proposta}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>React</span>
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;