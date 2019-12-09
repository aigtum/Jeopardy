import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import key from "weak-key";

const App = () => (
    <DataProvider questions="api/questions/"
                  topics="api/topics/"
                  render={(q,t) =>
                      <Table topics={t} questions={q}/>
                      //Object.entries(q[0]).map(el => <p key={key(el)}>{el[0]}</p>);
                      //Object.entries(t[0]).map(el => <p key={key(el)}>{el["text"]}</p>);
                  }
/>

);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;