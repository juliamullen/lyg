import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Threads from "./Threads";
import Form from "./Form";

const App = () => (
  <main>
    <DataProvider endpoint="api/thread/"
                      render={data => <Threads data={data} />} />
    <Form endpoint="api/post/" />
  </main>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
