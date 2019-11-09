import React from "react";

import { Desktop } from "./Responsive";

import logohorizontal from "../images/logo_horizontal.svg";
import cafe from "../images/cafe.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import whatsapp from "../images/whatsapp.svg";
import behance from "../images/behance.svg";
import linkedin from "../images/linkedin.svg";

import "../css/footer.scss";

export const Footer = () => {
    return (
        <section id="contacto-footer">
            <div id={"cafe"}>
                <div>
                    <div>
                        <h2>¡Te invitamos un café!</h2>
                        <p>Contáctanos</p>
                        <a href="mailto: hola@headtag.mx">hola@headtag.mx</a>
                        <br />
                        <a href="tel: +52 1 222 478 8138">+52 1 222 478 8138</a>
                    </div>
                    <img src={cafe} alt="Tasa de café" />
                </div>
            </div>
            <footer>
                <div id={"footer-site-map"}>
                    <Desktop>
                        <img src={logohorizontal} alt="" />
                    </Desktop>
                    <div>
                        <h2>Servicios</h2>
                        <a href="/servicios/desarrollo-web">Desarrollo Web</a>
                        <a href="/servicios/seo-sem">SEO / SEM</a>
                        <a href="/servicios/diseno-grafico">Diseño Gráfico</a>
                        <a href="/servicios/community-management">
                            Community Management
                        </a>
                        <a href="/servicios/marketing-digital">
                            Marketing Digital
                        </a>
                    </div>
                    <div>
                        <h2>Logros</h2>
                        <a href="/logros/nuestros-clientes">
                            Nuestros clientes
                        </a>
                        <a href="/logros/casos-de-exito">Casos de éxito</a>
                    </div>
                    <div>
                        <h2>Cultura</h2>
                        <a href="/cultura/nosotros">Nosotros</a>
                        <a href="/cultura/mision">Misión</a>
                        <a href="/cultura/vision">Visión</a>
                        <a href="/cultura/valores">Valores</a>
                    </div>
                    <div>
                        <h2>Blog</h2>
                        <a href="/blog">Artículos de interés</a>
                    </div>
                    <div className={"social"}>
                        <a href="https://www.facebook.com/headtagmx/">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/headtagmx/">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="https://web.whatsapp.com/send?phone=522223060900&text=&source=&data=%23">
                            <img src={whatsapp} alt="whatsapp" />
                        </a>
                        <a href="https://www.behance.net/mxheadtag">
                            <img src={behance} alt="behance" />
                        </a>
                        <a href="https://www.linkedin.com/company/headtagmx/">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                </div>
                <hr />
                <div className={"copyright"}>
                    <p>Copyright</p>
                </div>
            </footer>
        </section>
    );
};
