import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 id="title">Projects...</h1>
        <ul className="list-unstyled" style={{'text-align':'center'}}>
          <li>
            <a
              href="https://lw-change-calculator.herokuapp.com/"
              target="_blank"
            >
              <img className="image" src="..\photo\Screenshot (32).png" />
            </a>
          </li>
          <li>
            <a href="https://lw-vstda.herokuapp.com/" target="_blank">
              <img className="image" src="..\photo\Screenshot (31).png" />
            </a>
          </li>
          <li>
            <a
              href="https://lw-mortgage-calculator.herokuapp.com"
              target="_blank"
            >
              <img className="image" src="../photo/Screenshot (30).png" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
