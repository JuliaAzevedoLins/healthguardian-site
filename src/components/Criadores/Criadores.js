import React from 'react';
import Insta from "./Social Media Icon Square/Instagram.png";
import Linkedin from "./Social Media Icon Square/LinkedIn.png";
import Lu_Ju from "./Lu_ju.png";



function Criadores() {


  return (
    <main className="Criadores">
          <div className='Titulos'>
          <h1 className='Titulo_Criadores'>Conheça nosso time</h1>
          <h2 className='Subtitulo_Criadores'>Descubra a dupla talentosa por trás do sistema HealthGuardian
            que está empenhada em moldar o futuro da saúde!</h2>
        </div>
      <div className='Criadores_Main'>
        <img className='Ju-Lu' src={Lu_Ju} alt="Lu_Ju" />
        <div className='Cards_Criadores'>
          <div className='Card_Luis'>
            <div className='Parte1_Card_Luis'>
              <h2>Luis Barreto</h2>
              <p>19 anos</p>
              <div className='Insta_Linkedin'>
                <img className="Insta" src={Insta} alt="Insta" />
                <img className="Linkedin" src={Linkedin} alt="Linkedin" />
              </div>
            </div>
            <div className='Parte2_Card_Luis'>
              <p>Com 19 anos, estudo engenharia de software e estou entusiasmado com a
                oportunidade de aprender e criar no vasto mundo da tecnologia.
                Tenho determinação para superar desafios e estou ansioso para o futuro.
              </p>
            </div>
          </div>
          <div className='Card_Luis'>
            <div className='Parte1_Card_Luis'>
              <h2>Julia Lins</h2>
              <p>20 anos</p>
              <div className='Insta_Linkedin'>
                <img className="Insta" src={Insta} alt="Insta" />
                <img className="Linkedin" src={Linkedin} alt="Linkedin" />
              </div>
            </div>
            <div className='Parte2_Card_Luis'>
              <p>Estudante de Engenharia de Software na FIAP e Estagiária de Perfomance BI no C6 Bank. 
                Minha paixão envolve dados, tecnologia, criatividade e inovação.
              </p>
            </div>
          </div>
        </div>
    </div>
    </main>
  );
}

export default Criadores;