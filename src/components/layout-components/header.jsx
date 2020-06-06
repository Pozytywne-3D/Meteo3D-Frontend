import React from 'react';
import logo from '../../img/meteo.svg'


const Header = () => {
  return (
    <>
      <header className="header">
          <nav className="header__nav">
            <li className="header__nav--element"><a href="#kontakt">Kontakt</a></li>
            <li className="header__nav--element"><a href="#stacje">Stacje</a></li>
            <li className="header__nav--element"><a href="#oprojekcie">O projekcie</a></li>
          </nav> 
      </header>
      <section id="oprojekcie" className="about_project" >
        <img className="about_project--logo" src={logo} alt="meteo" />
            <h1 className="about_project--title">o projekcie</h1>
            <p className="about_project__description">
              My jako grupa <span className="color">Pozytywne_3D</span> wpadliśmy <br />
              na pomysł budowy systemu<b />
              <span className="color"> stacji meteorologicznych</span> badających<br />
              poziom zanieczyszczenia okolic <br />
              naszej <span className="color">szkoły</span> oraz <span className="color">miasta</span>.
            </p>
        </section>
    </>
  );
}


export default Header