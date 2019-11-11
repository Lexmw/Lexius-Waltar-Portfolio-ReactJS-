import React from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <div className="content-holder">
        <div className="row">
          <div className="col-md-4" id="image-holder">
            <img className="profile-img" src="../photo/profile_img.jpg" />
          </div>
          <div className="col-md-6 mb-6" id="about">
            <h2>Hi, I'm Lexius!</h2>

            <p>
              With my passion for science education and science communication, I
              chose to pursue Full Stack Development to help companies
              communicate their mission and their expertise with their
              customers. I am looking for a position where I am able to
              communicate complex concepts and work to educate others around me.
            </p>
            <p>
              When I'm not coding, I am planting in my garden with my siblings
              or going on long hikes. I love dancing and traveling to new
              places. But most of all, I am a straight foodie and I have to try
              everything at least once!
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4" style={{'text-align':'center'}}>
            <h3>Tech Stack</h3>
            <h4>Feel the MERN!</h4>
            <img id="mern" src="..\photo\Blog-Article-MERN-Stack.jpg" />
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-6" id="about">
            <p>
              The technologies that I have used include MongoDB, Express, React,
              and Node.js.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
