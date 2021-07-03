import React from "react";
import "../styles.css";
import Navigate from "./Navigate";
export default function About() {
  return (
    <div>
      <Navigate />
      <h1>About</h1>
      <div className="card">
        <img
          src="https://i.imgur.com/ZTkt4I5.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Ayushmaan Verma</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Computer Science Engineer
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://in.linkedin.com/ayushmaanverma" class="btn mr-2">
            <i className="fas fa-link"></i> LinkedIn
          </a>
          <a href="https://github.com/thatssoayushmaan" class="btn ">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
      </div>
    </div>
  );
}
