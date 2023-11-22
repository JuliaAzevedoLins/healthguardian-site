import WallpaperBeneficios from "./Wallpaper_Beneficios.png";
import Celular from "./Celular.png";
import Estetoscopio from "./Estetoscopio.png";
import Homem from "./Homem.png";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';

function Beneficios() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://healthguardian-e9b30-default-rtdb.firebaseio.com/DadosHealth.json')
            .then(response => response.json())
            .then(data => {
                const values = Object.values(data);
                setData(values);
                values.forEach(element => {
                    console.log("----------------------------------")
                    console.log(element.name)
                    console.log(element.questao1)
                    console.log(element.questao2)
                    console.log(element.questao3)
                    console.log(element.questao4)
                    console.log(element.questao5)
                    console.log(element.questao6)
                    console.log(element.questao7)
                    console.log(element.questao8)
                    console.log(element.questao9)
                    console.log(element.questao10)
                    console.log(element.pressao)
                    console.log(element.temperatura)

                });
            });
    }, []);


    return (
        <main className="Beneficios">
            <div className="Div_itulo_Beneficios">
                <h1 className="Titulo_Beneficios">Nossos Benefícios</h1>
            </div>
            <div className="beneficios">
                <div className="beneficios1">
                    <img src={Homem} alt="Homem" />
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
                    <img src={Estetoscopio} alt="Estetoscopio" />
                </div>
                <div className="beneficios1">
                    <img src={Celular} alt="Celular" />
                    <div className="Titulo_imagem">
                        <h2 className="Subtitulo_Beneficios">Comunicação eficiente</h2>
                        <p className="Texto_Beneficios">Após um procedimento médico, seu médico determinará a necessidade de acompanhamento.
                            O HealthGuardian utilizará tecnologia avançada para monitorar seus sinais vitais e sintomas de maneira contínua.</p>
                    </div>
                </div>
            </div>
            <div className="beneficios3">
                <div className="Titulo_imagem">
                    <h2 className="Subtitulo_Beneficios">Verificação dos sintomas</h2>
                    <p className="Texto_Beneficios">Após um procedimento médico, seu médico determinará a necessidade de acompanhamento.
                        O HealthGuardian utilizará tecnologia avançada para monitorar seus sinais vitais e sintomas de maneira contínua.</p>
                </div>
                <div className="Informaçoes">
                    <h3 className="Pacientes">Pacientes</h3>
                    {data.map((item, index) => (
                        <li key={index}>{item.name}   |
                          {item.questao1} |
                          {item.questao2} |
                          {item.questao3} |
                          {item.questao4} |
                          {item.questao5} |
                          {item.questao6} |
                          {item.questao7} |
                          {item.questao8} |
                          {item.questao9} |
                          {item.questao10} |
                            {item.pressao} |
                            {item.temperatura}
                          
                          </li>
                    ))}
                    </div>
                </div>
        </main>
    );
}

export default Beneficios;
