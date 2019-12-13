import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";

const App = () => (
    <DataProvider questions="api/questions/"
                  topics="api/topics/"
                  render={(q,t) =>
                      <Table topics={t} questions={q}/>
                  }
    />
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;