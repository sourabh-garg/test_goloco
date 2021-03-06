import React from 'react';

import './navbar.scss';
import './navbar_mobile.scss';
import Scroll from 'react-scroll';
let Link       = Scroll.Link;
import HamMenu from './hamMenu';

class Navbar extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container navbar home">

        <div className="flex hammMenu_hide">

          <div className="desktop_hide">
            <HamMenu />
          </div>


          <div className="logo">
            <a href=""><img src="https://image.ibb.co/cccJF6/goloco.png" alt=""/></a>
          </div>
        </div>


        <div className="navLinks mobileHide">

          <Link to="home" spy={true} smooth={true} duration={500} offset={0}>Home</Link>
          <Link to="concept" spy={true} smooth={true} duration={500} offset={220}>The concept</Link>
          <Link to="hard_work" spy={true} smooth={true} duration={500} offset={220}>Hard work to Hard fun</Link>
          <Link to="partner" spy={true} smooth={true} duration={500} offset={220}>Partners</Link>
          <Link to="contact" spy={true} smooth={true} duration={500} offset={220}>Contact us</Link>
          <Link to="register" spy={true} smooth={true} duration={500} offset={220}>Register</Link>

        </div>


      </div>
    );
  }

}



export default Navbar;
