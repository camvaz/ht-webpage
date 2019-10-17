import React, { Component, Fragment } from "react";
import "../css/entrada-blog.scss";
import { Footer } from "./Footer";

interface IEntradaBlogProps {}

interface IEntradaBlogState {}

export class EntradaBlog extends Component {
    render() {
        return (
            <Fragment>
                <section id={"blog-entry"}>
                    <div className="cover">
                        <div className="blog-entry-data">
                            <div>
                                <h1>Titulo del Blog</h1>
                                <h2>Subtitulo</h2>
                                <p>Autor: Enrique Lima Ortiz</p>
                                <p>Fecha: 01/10/2019</p>
                            </div>
                        </div>
                    </div>
                    <div className={"blog-entry-body"}>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Totam, hic. Eveniet voluptatibus repudiandae,
                            illo hic numquam sed reprehenderit ab delectus
                            voluptatum blanditiis rem quibusdam dolores, unde
                            dolore, autem iusto itaque.
                            <img src="" alt="" />
                        </div>
                        <img src="" alt="" />
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. At harum sequi velit delectus itaque quidem
                            dolorum provident perspiciatis architecto quas
                            facere eaque ex assumenda, doloribus impedit libero
                            ullam, alias dolore? Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Officiis, temporibus
                            eveniet quisquam dignissimos explicabo atque
                            inventore eum praesentium. Officiis, eius! Autem
                            quos alias repellat voluptas hic voluptate
                            exercitationem illo at! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Pariatur fugit
                            reiciendis expedita saepe impedit, possimus
                            temporibus culpa quasi totam minima nihil, incidunt
                            dicta enim ipsa! Fugit optio aut laudantium
                            aspernatur.
                        </div>
                        <div>
                            <h2>Subtitulo super cool</h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo mollitia sed magnam molestiae labore
                            maiores sint facilis vitae at. Tempore odit numquam
                            corrupti fugit iste earum recusandae, quasi deserunt
                            eaque.
                        </div>
                        <hr />
                    </div>
                </section>
                <Footer />
            </Fragment>
        );
    }
}
