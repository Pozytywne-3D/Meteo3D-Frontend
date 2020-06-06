import React from "react";
import PropperApp from '../propper-app'
import Header from './header'
import Footer from "./footer";
import Partners from "./partners";
import Contact from "./contact";
import Curiosities from '../curiosities/index'
import '../../css/app/app.scss';


const App = () => {
  return (
    <main>
      <Header />
      <PropperApp />
      <Curiosities />
      <Partners />
      <Contact />
      <Footer />
    </main>
  )
}


export default App;
