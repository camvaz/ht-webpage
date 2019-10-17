import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Inicio from "./Inicio";
import { createBrowserHistory } from "history";
import { NavBar } from "./NavBar";
import { Blog } from "./Blog";
import { EntradaBlog } from "./EntradaBlog";
import { Servicio } from "./Servicio";

class App extends Component {
    render = () => {
        let history = createBrowserHistory();
        return (
            <Router history={history}>
                <NavBar history transparent actualSection={"Inicio"} />
                <div style={{ paddingTop: "80px" }}>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/:entrada" component={EntradaBlog} />
                    <Route path="/servicios/:servicio" component={Servicio} />
                </div>
            </Router>
        );
    };
}

export default App;
