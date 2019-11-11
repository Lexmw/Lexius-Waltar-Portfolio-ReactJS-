import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small pt-3">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3 text-md-center">
              <h5 className="text-uppercase">Contact Me</h5>
              <a href="mailto:lexius.waltar@gmail.com">
                lexius.waltar@gmail.com
              </a>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-4 mb-md-0 mb-3 text-md-center">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled" >
                <div>
                <li className='col-sm-4 footer-list-item'>
                  <a href="#section_1">About</a>
                </li>
                <li className='col-sm-4 footer-list-item'>
                  <a href="#section_2">Projects</a>
                </li>
                <li className='col-sm-4 footer-list-item'>
                  <a href="#section_3">Contact</a>
                </li>
                </div>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3 text-md-center" />

            <div className="col-md-4 mb-md-0 mb-3 text-md-center">
              <h5 className="text-uppercase">Social</h5>
              <div className="row" id='glyphs-row'>
                <div className="col-md-2">
                  <a href="https://www.instagram.com/ladaayylexx/">
                    <img src="../photo/glyph-logo_May2016.png" />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="https://www.linkedin.com/in/lexius-waltar">
                    <img src="../photo/LI-In-Bug.png" />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="https://github.com/Lexmw">
                    <img src="..\photo\GitHub-Mark-32px.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
