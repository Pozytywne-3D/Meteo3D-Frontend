import React from 'react';
import atenaLogo from '../../img/athena.png'
import nettigoLogo from '../../img/nettigo.png'


const Partners = () => {
  return (
    <section className="partners">
      <div className="partners--title"><h2>Partnerzy projektu:</h2></div>
      <ul className="partners__list">
        <li className="partners__list--element"><a href="https://atena.pl/glowna/"><img src={atenaLogo} alt="atena-logo" /></a></li>
        <li className="partners__list--element"><a href="https://nettigo.pl/"><img src={nettigoLogo} alt="nettigo-logo" /></a></li>
      </ul>
      <div className="line"></div>
    </section>
  );
}


export default Partners