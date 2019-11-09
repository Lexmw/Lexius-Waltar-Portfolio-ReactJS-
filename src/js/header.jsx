import React from 'react';
import ScrollspyNav from "react-scrollspy-nav";

export default class Header extends React.Component {
    render(){
        return(
        
        <nav className="navbar navbar-expand-lg bg navbar-dark static-top fixed-top" id='navigation' >
       
        <div style={{'margin-left': '70px'}}>
            <a  href="#section_1">
                <img src="../photo/greenie.png" alt="/" id='logo'/>
            </a>
        </div>               

        <h2 id='home-link'>Lexius Waltar Portfolio</h2>
      <button id='toggle' className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span id='toggle-icon' className="navbar-toggler-icon"></span>
          </button>
   <ScrollspyNav
            scrollTargetIds={["section_1", "section_2", "section_3"]}
            activeNavClass="is-active"
        >
    <div className='nav-guide'>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav nav justify-content-end">
            <li className='nav-item'><a href="#section_1">Profile</a></li>
            <li className='nav-item'><a href="#section_2">Projects</a></li>
            <li className='nav-item'><a href="#section_3">Contact</a></li>
        </ul>
      </div>
    </div>
</ScrollspyNav> 
</nav>
  )};
}