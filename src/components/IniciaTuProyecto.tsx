import { Component } from "react";
import React from "react";
import { Footer } from "./Footer";
import "../css/inicia-tu-proyecto.scss";
import Button from "./Button";
import Helmet from "react-helmet";
import { routes } from "../routes/Routes";

export class IniciaTuProyecto extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>{routes.IniciaTuProyecto.title}</title>
                    <link
                        rel="canonical"
                        href={routes.IniciaTuProyecto.canonical}
                    />
                    <meta
                        name="description"
                        content={routes.IniciaTuProyecto.description}
                    />
                </Helmet>
                <section id="inicia-tu-proyecto">
                    <div className="comunicacion">
                        <div>
                            <h1>Inicia tu proyecto</h1>
                            <h2>Juntos, hagamos crecer tu empresa</h2>
                            <p>
                                Antes de empezar cualquier proyecto, nos
                                gustaría platicar (y tomar un café) contigo para
                                conocer tu empresa: cuáles son las metas que
                                quieres alcanzar y los problemas que estás
                                enfrentando para lograrlas. Así podremos saber
                                si somos la agencia correcta para ayudarte y
                                crear una estrategia a la medida de tus
                                necesidades.
                            </p>
                            <p>
                                Si tienes alguna duda o quieres empezar a
                                trabajar con nosotros, ¡contáctanos!
                            </p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8117244108585!2d-98.23805618484211!3d19.028016287115385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc790b57b304d%3A0xde358e16afb70ed1!2sHeadtag!5e0!3m2!1ses-419!2smx!4v1576454165330!5m2!1ses-419!2smx"
                                style={{
                                    border: 0,
                                    height: "250px",
                                    width: "100%"
                                }}
                                title={"mapa"}
                            ></iframe>
                        </div>
                    </div>
                    <div className="form">
                        <label htmlFor="nombre">Nombre y apellido*: </label>
                        <input type="text" name="nombre" />
                        <label htmlFor="correo">Correo</label>
                        <input type="mail" name="correo" />
                        <label htmlFor="telefono">Teléfono*: </label>
                        <input type="text" name="telefono" />
                        <label htmlFor="servicio">
                            Servicio que te interesa:{" "}
                        </label>
                        <select name="servicio" id="servicio">
                            <option value="SEO/SEM">SEO/SEM</option>
                            <option value="Desarrollo">Desarrollo</option>
                            <option value="Diseño Gráfico">
                                Diseño Gráfico
                            </option>
                        </select>
                        <label htmlFor="comentarios">Comentarios: </label>
                        <textarea
                            name="comentarios"
                            id="comentarios"
                        ></textarea>
                        <div className="boton-enviar">
                            <Button color={"rojo"} tamano={"large"}>
                                Enviar
                            </Button>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}
