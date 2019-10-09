import { Component } from "react";
import { IButtonProps } from "../types/ComponentTypes";
import React from "react";
import { Link } from "react-router-dom";

class Button extends Component<IButtonProps> {
    render() {
        if (typeof this.props.action === "string") {
            return (
                <div>
                    <Link to={this.props.action}>
                        <button className={`boton ${this.props.color} ${this.props.tamano}`}>
                            {this.props.children}
                        </button>
                    </Link>
                </div>
            );
        } else {
            return;
        }
    }
}

export default Button;