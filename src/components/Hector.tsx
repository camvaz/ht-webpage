import { Component } from "react";
import React from "react";
import "../css/hector.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import logo_hector from "../images/Hector.svg";
import {
    ThreeMosaic,
    BigPicture,
    SquaredTwoColumns,
    Full,
    Triple
} from "./ImageGrid";

import mural1 from "../images/Hector/Murales/1.jpeg";
import mural2 from "../images/Hector/Murales/2.jpeg";
import mural3 from "../images/Hector/Murales/3.jpeg";
import mural4 from "../images/Hector/Murales/4.jpeg";
import mural5 from "../images/Hector/Murales/5.jpeg";
import mural6 from "../images/Hector/Murales/6.jpeg";
import mural7 from "../images/Hector/Murales/7.jpeg";
import mural8 from "../images/Hector/Murales/8.jpeg";
import mural9 from "../images/Hector/Murales/9.jpeg";
import mural10 from "../images/Hector/Murales/10.jpeg";
import mural11 from "../images/Hector/Murales/11.jpeg";
import mural12 from "../images/Hector/Murales/12.jpeg";
import mural13 from "../images/Hector/Murales/13.jpeg";
import mural14 from "../images/Hector/Murales/14.jpeg";
import mural15 from "../images/Hector/Murales/15.jpeg";

import digital1 from "../images/Hector/Digital/1.png";
import digital2 from "../images/Hector/Digital/2.png";
import digital3 from "../images/Hector/Digital/3.png";
import digital4 from "../images/Hector/Digital/4.png";
import digital5 from "../images/Hector/Digital/5.png";
import digital6 from "../images/Hector/Digital/6.png";
import digital7 from "../images/Hector/Digital/7.png";
import digital8 from "../images/Hector/Digital/8.png";
import digital9 from "../images/Hector/Digital/9.png";
import digital10 from "../images/Hector/Digital/10.png";
import digital11 from "../images/Hector/Digital/11.png";
import digital12 from "../images/Hector/Digital/12.png";
import digital13 from "../images/Hector/Digital/13.png";
import digital14 from "../images/Hector/Digital/14.png";
import digital15 from "../images/Hector/Digital/15.png";
import digital16 from "../images/Hector/Digital/16.png";
import digital17 from "../images/Hector/Digital/17.png";

import acuarela1 from "../images/Hector/Acuarelas/1.jpeg";
import acuarela2 from "../images/Hector/Acuarelas/2.jpeg";
import acuarela3 from "../images/Hector/Acuarelas/3.jpeg";
import acuarela4 from "../images/Hector/Acuarelas/4.jpeg";
import acuarela5 from "../images/Hector/Acuarelas/5.jpeg";
import acuarela6 from "../images/Hector/Acuarelas/6.jpeg";
import acuarela7 from "../images/Hector/Acuarelas/7.jpeg";
import acuarela8 from "../images/Hector/Acuarelas/8.jpeg";
import acuarela9 from "../images/Hector/Acuarelas/9.jpeg";
import acuarela10 from "../images/Hector/Acuarelas/10.jpeg";
import acuarela11 from "../images/Hector/Acuarelas/11.jpeg";
import acuarela12 from "../images/Hector/Acuarelas/12.jpeg";
import acuarela13 from "../images/Hector/Acuarelas/13.jpeg";
import acuarela14 from "../images/Hector/Acuarelas/14.jpeg";
import acuarela15 from "../images/Hector/Acuarelas/15.jpeg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";

export class Hector extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.changeSection = this.changeSection.bind(this);
        const refsToImg = {
            acuarela: [
                acuarela1,
                acuarela2,
                acuarela3,
                acuarela4,
                acuarela5,
                acuarela6,
                acuarela7,
                acuarela8,
                acuarela9,
                acuarela10,
                acuarela11,
                acuarela12,
                acuarela13,
                acuarela14,
                acuarela15
            ],
            mural: [
                mural1,
                mural2,
                mural3,
                mural4,
                mural5,
                mural6,
                mural7,
                mural8,
                mural9,
                mural10,
                mural11,
                mural12,
                mural13,
                mural14,
                mural15
            ],
            digital: [
                digital1,
                digital2,
                digital3,
                digital4,
                digital5,
                digital6,
                digital7,
                digital8,
                digital9,
                digital10,
                digital11,
                digital12,
                digital13,
                digital14,
                digital15,
                digital16,
                digital17
            ]
        };
        this.state = {
            activeSection: "acuarela",
            openedImage: 1,
            refs: refsToImg,
            isOpen: false
        };
    }

    changeSection(section: string) {
        this.setState({ activeSection: section });
    }

    render() {
        const { isOpen, refs, openedImage, activeSection } = this.state;
        return (
            <>
                {isOpen && (
                    <Lightbox
                        mainSrc={refs[activeSection][openedImage]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        nextSrc={refs[activeSection][openedImage + 1]}
                        prevSrc={refs[activeSection][openedImage - 1]}
                        onMoveNextRequest={() =>
                            this.setState({ openedImage: openedImage + 1 })
                        }
                        onMovePrevRequest={() =>
                            this.setState({ openedImage: openedImage - 1 })
                        }
                    />
                )}
                <section id="hector">
                    <header>
                        <div className="logo">
                            <img src={logo_hector} alt="" />
                        </div>
                        <div className="texto">
                            <p>
                                ¡HOLA! Mi nombre es Héctor y soy Ilustrador,
                                amante de la naturaleza y los animales. Nací en
                                la ciudad de Córdoba, Veracruz y actualmente
                                vivo en la CDMX.
                            </p>
                            <p>
                                Meforme y gradué como diseñador gráfico en la
                                Universidad Gestalt de Diseño en la ciudad de
                                Xalapa, Veracruz. Misma donde me especialicé
                                como Ilustrador y animador digital.
                            </p>
                            <p>
                                He trabajado con marcas locales creando
                                carteles, comics, murales y contenido digital
                                para redes sociales. Actualmente diseño, ilustro
                                y colaboro con mis amigos de Headtag y me
                                gustaría colaborar contigo.
                            </p>
                        </div>
                    </header>
                    <div className={"redes-hectorol"}>
                        <a
                            href={
                                "https://www.facebook.com/H-E-C-T-O-R-O-L-106328327437821/"
                            }
                        >
                            <img src={facebook} alt="" />
                        </a>
                        <a
                            href={
                                "https://www.instagram.com/hectorol.ilustra/?hl=es-la"
                            }
                        >
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                    <nav>
                        <div
                            onClick={() => this.changeSection("digital")}
                            className={
                                this.state.activeSection === "digital"
                                    ? "activo"
                                    : undefined
                            }
                        >
                            <h2>DIGITAL</h2>
                        </div>
                        <div
                            onClick={() => this.changeSection("mural")}
                            className={
                                this.state.activeSection === "mural"
                                    ? "activo"
                                    : undefined
                            }
                        >
                            <h2>MURALES</h2>
                        </div>
                        <div
                            onClick={() => this.changeSection("acuarela")}
                            className={
                                this.state.activeSection === "acuarela"
                                    ? "activo"
                                    : undefined
                            }
                        >
                            <h2>ACUARELA</h2>
                        </div>
                    </nav>
                    <section className={"art-section"}>
                        {this.state.activeSection === "mural" && (
                            <>
                                <ThreeMosaic
                                    img1={mural1}
                                    img2={mural2}
                                    img3={mural3}
                                    direction={"normal"}
                                    numbers={[1, 2, 3]}
                                    openedImage={this.openedImage}
                                />
                                <BigPicture
                                    img={mural4}
                                    number={4}
                                    openedImage={this.openedImage}
                                />
                                <BigPicture
                                    img={mural5}
                                    number={5}
                                    openedImage={this.openedImage}
                                />
                                <SquaredTwoColumns
                                    img1={mural6}
                                    img2={mural7}
                                    numbers={[6, 7]}
                                    openedImage={this.openedImage}
                                />
                                <SquaredTwoColumns
                                    img1={mural8}
                                    img2={mural9}
                                    numbers={[8, 9]}
                                    openedImage={this.openedImage}
                                />
                                <BigPicture
                                    img={mural10}
                                    number={10}
                                    img2={mural12}
                                    openedImage={this.openedImage}
                                />
                                <ThreeMosaic
                                    img1={mural13}
                                    img2={mural14}
                                    img3={mural15}
                                    direction={"reverse"}
                                    numbers={[13, 14, 15]}
                                    openedImage={this.openedImage}
                                />
                            </>
                        )}
                        {this.state.activeSection === "digital" && (
                            <>
                                <Full
                                    img={digital1}
                                    number={1}
                                    openedImage={this.openedImage}
                                />
                                <ThreeMosaic
                                    img1={digital2}
                                    img2={digital3}
                                    img3={digital4}
                                    numbers={[2, 3, 4]}
                                    openedImage={this.openedImage}
                                />
                                <Full
                                    img={digital5}
                                    number={5}
                                    openedImage={this.openedImage}
                                />
                                <ThreeMosaic
                                    img1={digital6}
                                    img2={digital7}
                                    img3={digital8}
                                    direction={"reverse"}
                                    numbers={[6, 7, 8]}
                                    openedImage={this.openedImage}
                                />
                                <Full img={digital9} number={9} openedImage />
                                <ThreeMosaic
                                    img1={digital10}
                                    img2={digital11}
                                    img3={digital12}
                                    numbers={[10, 11, 12]}
                                    openedImage={this.openedImage}
                                />
                                <ThreeMosaic
                                    img1={digital13}
                                    img2={digital14}
                                    img3={digital15}
                                    direction={"reverse"}
                                    numbers={[13, 14, 15]}
                                    openedImage={this.openedImage}
                                />
                                <Full
                                    img={digital16}
                                    number={16}
                                    openedImage={this.openedImage}
                                />
                                <Full
                                    img={digital17}
                                    number={17}
                                    openedImage={this.openedImage}
                                />
                            </>
                        )}
                        {this.state.activeSection === "acuarela" && (
                            <>
                                <ThreeMosaic
                                    img1={acuarela1}
                                    img2={acuarela2}
                                    img3={acuarela3}
                                    numbers={[1, 2, 3]}
                                    openedImage={this.openedImage}
                                />
                                <Triple
                                    img1={acuarela4}
                                    img2={acuarela5}
                                    img3={acuarela6}
                                    numbers={[5, 6, 7]}
                                    openedImage={this.openedImage}
                                />
                                <ThreeMosaic
                                    img1={acuarela7}
                                    img2={acuarela8}
                                    img3={acuarela9}
                                    direction={"reverse"}
                                    numbers={[7, 8, 9]}
                                    openedImage={this.openedImage}
                                />
                                <Triple
                                    img1={acuarela10}
                                    img2={acuarela11}
                                    img3={acuarela12}
                                    numbers={[10, 11, 12]}
                                    openedImage={this.openedImage}
                                />
                                <ThreeMosaic
                                    img1={acuarela13}
                                    img2={acuarela14}
                                    img3={acuarela15}
                                    numbers={[13, 14, 15]}
                                    openedImage={this.openedImage}
                                />
                            </>
                        )}
                    </section>
                </section>
            </>
        );
    }

    openedImage = (openedImage: number) => {
        this.setState({ isOpen: true, openedImage: openedImage - 1 });
    };
}
