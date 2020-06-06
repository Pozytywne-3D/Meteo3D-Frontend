import React from 'react';
import footerLogo from '../../img/poztywne3d.svg'
import ytLogo from '../../img/fb.svg'
import fbLogo from '../../img/yt.svg'
import pozwww from '../../img/pozwww.svg'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__socials">
          <h2 className="footer__socials--title">Znajdź nas na:</h2>
          <ul className="social_list">
            <li className="social_list--element"><a href="https://www.facebook.com/pozytywne3d/"><img src={fbLogo} alt="FB" /></a></li>
            <li className="social_list--element"><a href="https://www.youtube.com/channel/UCijKzCDWdL6_suyKWrnp_6w/"><img src={ytLogo} alt="YT" /></a></li>
            <li className="social_list--element"><a href="https://3d.pozytywneinicjatywy.pl/"><img src={pozwww} alt="WWW" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer--branding" >
          <a href="https://3d.pozytywneinicjatywy.pl/"><img src={footerLogo} alt="logo" /></a>
          <a className="footer--api" href="https://github.com/Pozytywne-3D/Meteo3D-Backend">API & Documentation</a>
          <a className="footer--api" href="https://github.com/Pozytywne-3D/Meteo3D-Frontend">Repository</a>
        </div>
        <p className="footer__author">© <a href="https://3d.pozytywneinicjatywy.pl/">Pozytywne_3D</a> 2020</p>
      </div>
    </footer>
  );
}


export default Footer