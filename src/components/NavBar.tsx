import { Component, Fragment } from "react";
import React from "react";
import { INavBarProps } from "../types/SiteTypes";
import { routes } from "../routes/Routes";
import logo from "../images/logo.svg";
import Button from "./Button";
import { Desktop } from "./Responsive";
import { HashLink as Link } from "react-router-hash-link";

export class NavBar extends Component<INavBarProps> {
    render() {
        return (
            <div id="header">
                <div>
                    <Link to={routes.Inicio.link}>
                        <img src={logo} alt="Headtag mx" />
                    </Link>
                </div>
                <Desktop>
                    <Fragment>
                        <nav>
                            <ol>
                                <li>
                                    <Link
                                        to={routes.Servicios.link}
                                        smooth={true}
                                    >
                                        {routes.Servicios.name}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.Logros.link}>
                                        {routes.Logros.name}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.Cultura.link}>
                                        {routes.Cultura.name}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={routes.Blog.link}>
                                        {routes.Blog.name}
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                        <div>
                            <Button
                                color={"rojo"}
                                action={"/inicia-tu-proyecto"}
                            >
                                Inicia tu proyecto
                            </Button>
                        </div>
                    </Fragment>
                </Desktop>
            </div>
        );
    }
}
