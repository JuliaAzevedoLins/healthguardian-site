import React from "react";
import Gif from "./HealthGuardian - GIF.gif";
import Mocap from "./Mocap.png";
import Finger from "./Finger.png";
import Keep from "./KeepSafe.png";
import Cell from "./Cellphone.png";

function HealthGuardian() {
  return (
    <div>
      <div className="ParteUm">
        <img className="Gif" src={Gif} alt="Gif" />
        <div className="TextoParteUm">
          <div className="Titulo_HealthGuardian">HealthGuardian</div>
          <div className="Subtitulo_HealthGuardian">
            Moldando o futuro da saúde!
          </div>
          <div className="Texto_HealthGuardian">
            Apresentamos o HealthGuardian, uma inteligência artificial que
            monitora continuamente sua saúde pós-atendimento. Dependendo da
            gravidade dos sintomas, faz perguntas para avaliar a necessidade de
            retorno ao médico, proporcionando orientações personalizadas para o
            seu bem-estar contínuo. Atua como seu cuidador virtual,
            proporcionando monitoramento inteligente e suporte remoto.
          </div>
        </div>
      </div>
      <div className="Tudo">
        <div className="ParteDois">
          <div className="funcionamento">
            <strong>Como funciona?</strong>
          </div>
          <div className="Cards">
            <div className="Card">
              <div className="CardTitulo">
                <strong>Monitoramento personalizado</strong>
              </div>
              <div className="CardTexto">
                Após um procedimento médico, seu médico determinará a
                necessidade de acompanhamento. O HealthGuardian utilizará
                tecnologia avançada para monitorar seus sinais vitais e sintomas
                de maneira contínua.
              </div>
            </div>
            <div className="Card">
              <div className="CardTitulo">
                <strong>Avaliações diárias do paciente</strong>
              </div>
              <div className="CardTexto">
                Dependendo da gravidade do procedimento, o HealthGuardian
                solicitará que você responda a perguntas diárias sobre seu
                estado de saúde. Essas avaliações são personalizadas e adaptadas
                às orientações específicas do seu médico.
              </div>
            </div>
            <div className="Card">
              <div className="CardTitulo">
                <strong>Alertas e intervenções precoces</strong>
              </div>
              <div className="CardTexto">
                Caso o sistema identifique alguma alteração preocupante em seus
                dados ou nas respostas fornecidas, alertas proativos serão
                acionados. Se necessário, o HealthGuardian facilitará a
                comunicação direta com seus profissionais de saúde, permitindo
                intervenções rápidas.
              </div>
            </div>
            <div className="Card">
              <div className="CardTitulo">
                <strong>Tempo de monitoramento</strong>
              </div>
              <div className="CardTexto">
                O período de monitoramento diário será estipulado pelo médico,
                levando em consideração a natureza do procedimento e sua
                gravidade. Ao final desse período, uma avaliação geral será
                realizada para determinar se é necessário continuar o
                monitoramento.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ParteTres">
        <h1 className="Texto_ParteTres">
          Experimente o futuro do cuidado pós-hospitalar com o HealthGuardian
        </h1>
        <img className="Mocap" src={Mocap} alt="Mocap" />
      </div>

      <div className="ParteQuatro">
        <div className="Main_ParteQuatro">
        <h1 className="TituloParteQuatro">Nossos benefícios</h1>
        <div className="Topicos_ParteQuatro">
          <div className="Sub_ParteQuatro">
            <img className="Finger" src={Finger} alt="Finger" />
            <h2>Recuperação personalizada</h2>
          </div>
          <div className="Sub_ParteQuatro">
            <img className="Keep" src={Keep} alt="Keep" />
            <h2>Prevenção de complicações</h2>
          </div>
          <div className="Sub_ParteQuatro">
            <img className="Cell" src={Cell} alt="Cell" />
            <h2>Comunicação eficiente</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HealthGuardian;
