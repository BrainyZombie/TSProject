import "bulmaswatch/superhero/bulmaswatch.min.css";
import ReactDOM from "react-dom";
// import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./state";
const App = () => {
  return (
    <div>
      {/* <CodeCell /> */}
      <TextEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
