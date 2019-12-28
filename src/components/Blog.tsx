import React from "react";
import { Footer } from "./Footer";

import "../css/blog.scss";

import blog from "../images/Blog.svg";
import { IEntradaBlog } from "../types/SiteTypes";
import Button from "./Button";
import { Link } from "react-router-dom";
import { routes } from "../routes/Routes";
import Helmet from "react-helmet";

interface IBlogProps {}

interface IBlogState {
    blog: {
        entradas: IEntradaBlog[];
    };
    numberOfBlogEntriesShown: number;
}

export class Blog extends React.Component<IBlogProps, IBlogState> {
    constructor(props: any) {
        super(props);
        this.state = {
            blog: {
                entradas: []
            },
            numberOfBlogEntriesShown: 6
        };
    }
    render() {
        return (
            <div id={"blog"}>
                <Helmet>
                    <title>{routes.Blog.title}</title>
                    <link rel="canonical" href={routes.Blog.canonical} />
                    <meta
                        name="description"
                        content={routes.Blog.description}
                    />
                </Helmet>
                <section className={"definicion-blog"}>
                    <div className={"header-blog"}>
                        <div className={"flex-vertical-centered"}>
                            <div>
                                <h1>Blog</h1>
                                <h2>Artículos e información</h2>
                                <p>
                                    En esta sección de nuestra página web,
                                    semanalmente compartiremos contigo
                                    información, tips y noticias relacionadas
                                    con el mundo del marketing digital,
                                    desarrollo web, diseño, SEO y redes
                                    sociales.
                                </p>
                            </div>
                        </div>
                        <img src={blog} alt="" />
                    </div>
                    <div id={"blog-list"}>{this.getPreviewEntradas()}</div>
                    <div className={"boton-ver-mas"}>
                        <Button
                            disabled={
                                this.state.blog.entradas.length <=
                                this.state.numberOfBlogEntriesShown
                            }
                            color={"azul"}
                            onClick={() =>
                                this.setState({
                                    numberOfBlogEntriesShown:
                                        this.state.numberOfBlogEntriesShown + 6
                                })
                            }
                        >
                            Ver más artículos
                        </Button>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data => data.json())
            .then(entradas => this.setState({ blog: { entradas } }))
            .catch(error => console.log(error));
    }

    getPreviewEntradas = () => {
        const entradas: JSX.Element[] = [];
        this.state.blog.entradas.some((entrada, index) => {
            if (index === this.state.numberOfBlogEntriesShown) return true;
            entradas.push(
                <div key={index} className={"entrada-preview"}>
                    <Link to={"blog/lel"}>
                        <div className={"foto"}>
                            {entrada.foto ? (
                                <img src={require(`${entrada.foto}`)} alt="" />
                            ) : (
                                <div className={"gris"} />
                            )}
                        </div>
                        <h2>{entrada.title}</h2>
                    </Link>
                </div>
            );
            return false;
        });
        return entradas;
    };
}
