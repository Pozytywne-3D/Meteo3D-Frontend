import React from 'react';
import imgg from '../../img/img.png'


const Curiosities = () => {
  return (
    <section className="curiosities">
      <h2 className="curiosities--title">CZY WIESZ, ŻE...</h2>
      <div className="curiosities__main">
        <img className="curiosities__main--img" src={imgg} alt="zdjęcie" />
        <p className="curiosities__main--text">
          Statystyczny Polak wytwarza ponad <span>320 kg śmieci rocznie</span>? <br /><br />
          Na wysypiska ląduje ponad <span>12 milionów ton</span> odpadów , a aż <span>98%</span> można by wykorzystać poprzez <span>segregację</span>.
        </p>
      </div>
    </section>
  );
}


export default Curiosities