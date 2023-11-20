import React from "react";
import Intermedica from "../Footer/cropped-intermedica.png";
import Hapvida from "../Footer/hapvida-escudo.png";


function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_">
        <div className="Titulos_footer">
          <h1 className="Titulo_footer">Health Guardian</h1>
          <h3 className="Subtitulo_footer">Moldando o futuro da saúde!</h3>
          </div>
          <div className="imagens">
          <img className="logo" src={Intermedica} alt="Intermedica" />
          <img className="logo" src={Hapvida} alt="Hapvida" />
        </div>
      
      </div>
      <div className="Copyright">
        <div>Copyright © 2023 HealthGuardian | All Rights Reserved </div>
      </div>
    </div>
  );
}

export default Footer;
