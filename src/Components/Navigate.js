import React from "react";
import { useHistory } from "react-router-dom";
export default function Navigate(props) {
  const history = useHistory();
  const { goBack, goForward } = history;
  return (
    <div>
      <span style={{ textAlign: "left" }}>
        <button onClick={goBack}>Go Back</button>
      </span>
      <span style={{ textAlign: "right" }}>
        <button onClick={goForward}>Go Forward</button>
      </span>
    </div>
  );
}
