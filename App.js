import React from "react";
import ReactDOM from "react-dom/client";

const content = React.createElement("div", {id: "first"},
[
    React.createElement("div", {id: "red"},
        [React.createElement("h1", {style: {color: "red"}},"I am H1 red"),
        React.createElement("h2", {style: {color: "red"}},"I am H2 red")]
        ),
    React.createElement("div", {id: "green"},
        [React.createElement("h1", {style: {color: "green"}},"I am H1 green"),React.createElement("h2", {style: {color: "green"}},"I am H2 green")])
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);