import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="content-holder">
        <h1 id="title">Projects</h1>
        <ul className="list-unstyled" style={{ "text-align": "center" }}>
          <li className="Project-items">
            <div>
            <h3>Central San Diego Black Chamber of Commerce </h3>
            <p>
              The local Black Chamber of commerce requested a new site created in
              wordpress. The website is there main source of client interaction
              and receives heavy traffic from potential members, donators, and
              community organizations.
              <br />
              Technologies: Wordpress CMS, Thrive Architect, CSS
              <br />
              Visit the live site here:{" "}
              <a href="http://sdblackchamber.org/" target="_blank">
                http://sdblackchamber.org/
              </a>
            </p>
            </div>
          <div className="container">
            <img className="image" src={require('../photo/.CSDBCC.png.icloud')} />
            <div class="middle">
              <div class="text">
                <a href="http://sdblackchamber.org/" target="_blank">
                  <p>Visit Site</p>
                </a>
              </div>
            </div>
      </div>
          </li>
          <li className="Project-items">
            <div>
              <h3>GodsApparels Eccomerce Website</h3>
            <p>
              A local faith-based Apparel Company requested a website to house
              their online Apparel Sales.
              <br />
              Technologies: Shopify CMS, Printify, CSS
              <br />
              Visit the Test Site here:{" "}
              <a href="https://godsapparels.com/">https://godsapparels.com/</a>
            </p>
              </div>
              <div className="container">
            <img className="image" src={require('../photo/.GodsApparels.png.icloud')} />
            <div class="middle">
              <div class="text">
                <a href="https://godsapparels.com/" target="_blank" target="_blank">
                <p>Visit Site</p>
                </a>
              </div>
            </div>
          </div>
          </li>
          <li className="Project-items">
            <div>
            <h3>Nikariarts.com</h3>
            <p>
              A Local Artist requested an Eccomerce site to act as a platform to
              sell their art pieces, apparel, collect donations, and commission
              requests.
              <br />
              Technologies: Squarespace CMS
              <br />
              Visit the Live site here:{" "}
              <a href="https://www.nikariarts.com/ " target="_blank">
                https://www.nikariarts.com/
              </a>
            </p>
            </div>
            <div className="container">
            <img className="image" src={require('../photo/.Nikariarts.png.icloud')} />
            <div class="middle">
              <div class="text">
                <a href="https://www.nikariarts.com/" target="_blank">
                <p>Visit Site</p>
                </a>
              </div>
            </div>
          </div>
          </li>
          <li className="Project-items">
            <div>
            <h3>Defense Week Local Conference</h3>
            <p>
              Created a Landing page for a local conference to announce their
              ticket sales. 
              <br />
              Technologies: Wordpress CMS, Thrive Architect
              <br />
              Visit the Live site here:{" "}
              <a href="https://defenseweek.com/" target="_blank">https://defenseweek.com/</a>
            </p>
            </div>
            <div className="container">
            <img className="image" src={require('../photo/DefenseWeek.png')} />
            <div class="middle">
              <div class="text">
                <a href="https://defenseweek.com/" target="_blank">
                <p>Visit Site</p>
                </a>
              </div>
            </div>
          </div>
            
          </li>
        </ul>
      </div>
    );
  }
}
