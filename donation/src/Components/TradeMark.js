import React, { Component } from "react";
import facebook from "../facebook.png";
import mail from "../mail.png";
import linkedin from "../linkedin.png";

class componentName extends Component {
  render() {
    return (
      <div>
        <div className="trademark">
          <div>
            <p className="copywrite">
             The Donation Point Foundation.
            </p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href=""
            >
              <img
                style={{
                  width: "2.5vw",
                  height: "auto",
                  marginLeft: "1vw",
                  cursor: "pointer",
                }}
                src={facebook}
                alt="err"
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href=""
            >
              <img
                style={{
                  width: "2.5vw",
                  height: "auto",
                  marginLeft: "1vw",
                  cursor: "pointer",
                }}
                src={mail}
                alt="err"
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href=""
            >
              <img
                style={{
                  width: "2.5vw",
                  height: "auto",
                  marginLeft: "1vw",
                  cursor: "pointer",
                }}
                src={linkedin}
                alt="err"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default componentName;
