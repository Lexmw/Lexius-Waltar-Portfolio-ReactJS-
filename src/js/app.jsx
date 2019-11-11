import React from 'react';
import ScrollspyNav from "react-scrollspy-nav";
import Footer from './footer';
import Header from './header';
import Projects from './projects';
import Profile from './profile';
import Contact from './contact';

export default class App extends React.Component {
    render() {
        return(
            <div>
              <Header/>
              <div id='container'>
                <div id="section_1" style={{"padding":"50px 0px"}}><Profile/></div>
                <div id="section_2" style={{"padding":"50px 0px"}}><Projects/></div>
                <div id="section_3" style={{"padding":"50px 0px"}}><Contact/></div>
              </div>
              <Footer/> 
            </div>
        )
    }
};