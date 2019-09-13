import React, { Component, Fragment } from "react";
import Helmet from 'react-helmet';
import { routes } from "../routes/Routes";

class Inicio extends Component{
    render () {
        return (
        <Fragment>
            <Helmet>
                <title>{routes.Inicio.title}</title>
                <link rel="canonical" href={routes.Inicio.canonical} />
                <meta name="description" content={routes.Inicio.description} />
            </Helmet>
            <h1>Inicio</h1>
        </Fragment>
        )
    }
}

export default Inicio;