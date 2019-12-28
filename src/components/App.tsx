import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Inicio from "./Inicio";
import { Cultura } from "./Cultura";
import { Logros } from "./Logros";
import { createBrowserHistory } from "history";
import { NavBar } from "./NavBar";
import { Blog } from "./Blog";
import { EntradaBlog } from "./EntradaBlog";
import { Servicio } from "./Servicio";
import { Hector } from "./Hector";
import { IniciaTuProyecto } from "./IniciaTuProyecto";

class App extends Component {
    render = () => {
        let history = createBrowserHistory();
        return (
            <Router history={history}>
                <NavBar history transparent actualSection={"Inicio"} />
                <ScrollToTop>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/logros" exact component={Logros} />
                    <Route path="/cultura" exact component={Cultura} />
                    <Route path="/blog/:entrada" component={EntradaBlog} />
                    <Route path="/servicios/:servicio" component={Servicio} />
                    <Route
                        path="/inicia-tu-proyecto"
                        component={IniciaTuProyecto}
                    />
                    <Route path="/hectorol" component={Hector} />
                </ScrollToTop>
            </Router>
        );
    };
}

export default App;
