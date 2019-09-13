import { Component } from "react";
import React from "react";
import { INavBarProps } from "../types/SiteTypes";
import { Link } from "react-router-dom";
import { routes } from "../routes/Routes";
import logo from "../images/logo.svg";


export class NavBar extends Component<INavBarProps> {
    render() {
        return (
            <div id="header">
                <img src={logo} alt="Headtag mx"/>
                <nav>
                    <ol>
                        <li>
                            <Link to={routes.Servicios.link}>{routes.Servicios.name}</Link>
                        </li>
                        <li>
                            <Link to={routes.Logros.link}>{routes.Logros.name}</Link>
                        </li>
                        <li>
                            <Link to={routes.Cultura.link}>{routes.Cultura.name}</Link>
                        </li>
                        <li>
                            <Link to={routes.Blog.link}>{routes.Blog.name}</Link>
                        </li>
                    x</ol>
                </nav>
            </div>
        )
    }
}