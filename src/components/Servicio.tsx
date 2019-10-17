import React, { Component } from "react";
import Helmet from "react-helmet";

import "../css/servicio.scss";

import { Footer } from "./Footer";
import { routes } from "../routes/Routes";

export class Servicio extends Component {
    render() {
        const img = routes.SEOSEM.showedImage;
        const logo = routes.SEOSEM.logo;
        return (
            <div id="servicio">
                <Helmet>
                    <title>{routes.SEOSEM.title}</title>
                    <link rel="canonical" href={routes.SEOSEM.canonical} />
                    <meta
                        name="description"
                        content={routes.SEOSEM.description}
                    />
                </Helmet>
                <section className="definicion-servicio">
                    <div className={"header-servicio"}>
                        <div className={"flex-vertical-centered"}>
                            <div>
                                <div>
                                    <img
                                        src={require(`../images/${logo}`)}
                                        alt=""
                                    />
                                    <div>
                                        <h1>{routes.SEOSEM.name}</h1>
                                        <h2>Subtitulos</h2>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellendus facilis
                                    corrupti deserunt, ullam illum nostrum modi
                                    nisi odio consectetur. Eaque blanditiis,
                                    neque tempora accusantium fugiat ad aperiam
                                    vel officiis suscipit? Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit. Maxime
                                    eveniet veniam, repudiandae molestiae
                                    consequatur a vel? At, dolor molestiae
                                    aperiam hic reprehenderit, adipisci dolores
                                    obcaecati delectus, culpa cupiditate modi
                                    suscipit!
                                </p>
                            </div>
                        </div>
                        <img
                            src={require(`../images/Servicios/${img}`)}
                            alt=""
                        />
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
