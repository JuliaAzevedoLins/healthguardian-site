import WallpaperBeneficios from "./Wallpaper_Beneficios.png";
import Celular from "./Celular.png";
import Estetoscopio from "./Estetoscopio.png";
import Homem from "./Homem.png";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';


function Beneficios() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://healthguardian-e9b30-default-rtdb.firebaseio.com/DadosHealth.json')
            .then(response => response.json())
            .then(data => {
                const values = Object.values(data);
                setData(values);
            });
    }, []);

    const filteredData = data.filter(item => item.name.toLowerCase() === searchTerm.toLowerCase());




    return (
        <main className="Beneficios">
            <div className="Div_itulo_Beneficios">
                <h1 className="Titulo_Beneficios">Nossos Benefícios</h1>
            </div>
            <div className="beneficios">
                <div className="beneficios1">
                    <img className="imagens_Beneficios" src={Homem} alt="Homem" />
                    <div className="Titulo_imagem">
                        <h2 className="Subtitulo_Beneficios">Recuperação personalizada</h2>
                        <p className="Texto_Beneficios">Após um procedimento médico, seu médico determinará a necessidade de acompanhamento.
                            O HealthGuardian utilizará tecnologia avançada para monitorar seus sinais vitais e sintomas de maneira contínua.</p>
                    </div>
                </div>
                <div className="beneficios2">
                    <div className="Titulo_imagem">
                        <h2 className="Subtitulo_Beneficios">Prevenção de complicações</h2>
                        <p className="Texto_Beneficios">Após um procedimento médico, seu médico determinará a necessidade de acompanhamento.
                            O HealthGuardian utilizará tecnologia avançada para monitorar seus sinais vitais e sintomas de maneira contínua.</p>
                    </div>
                    <img className="imagens_Beneficios" src={Estetoscopio} alt="Estetoscopio" />
                </div>
                <div className="beneficios1">
                    <img className="imagens_Beneficios" src={Celular} alt="Celular" />
                    <div className="Titulo_imagem">
                        <h2 className="Subtitulo_Beneficios">Comunicação eficiente</h2>
                        <p className="Texto_Beneficios">Após um procedimento médico, seu médico determinará a necessidade de acompanhamento.
                            O HealthGuardian utilizará tecnologia avançada para monitorar seus sinais vitais e sintomas de maneira contínua.
                            verifique abaixo um despositivo cadastrado!</p>
                    </div>
                </div>
            </div>
            <div className="beneficios3">
                <div className="Beneficios_3">
                    <div className="Informaçoes">
                        <section className="search">
                            <h2 className="Subtitulo_Beneficios">Procure aqui seu dispositivo!</h2>
                            <div className="Print_lista">
                            <input type="text" className="Input_Paciente" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Procure seu nome" />
                            {searchTerm && filteredData.map((item, index) => (
                                <li key={index} className="patient-info">
                                    <strong>Question 1:</strong> {item.questao1 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 2:</strong> {item.questao2 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 3:</strong> {item.questao3 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 4:</strong> {item.questao4 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 5:</strong> {item.questao5 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 6:</strong> {item.questao6 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 7:</strong> {item.questao7 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 8:</strong> {item.questao8 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 9:</strong> {item.questao9 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Question 10:</strong> {item.questao10 === 1 ? 'Sim' : 'Não'} <br />
                                    <strong>Pressão:</strong> {item.pressao} <br />
                                    <strong>Temperatura:</strong> {item.temperatura} <br />
                                </li>
                            ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Beneficios;
