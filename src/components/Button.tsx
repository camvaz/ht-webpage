import { Component } from "react";

import React from "react";
import { Link } from "react-router-dom";

export interface IButtonProps {
    action?: string;
    color: string;
    tamano?: string;
    onClick?: () => void;
    disabled?: boolean;
}

class Button extends Component<IButtonProps> {
    render() {
        if (typeof this.props.action === "string") {
            return (
                <div>
                    <Link to={this.props.action}>
                        <button
                            className={`boton ${this.props.color} ${this.props.tamano}`}
                        >
                            {this.props.children}
                        </button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div style={{ margin: "auto" }}>
                    <button
                        className={`boton ${this.props.color} ${
                            this.props.tamano
                        } ${this.props.disabled ? "disabled" : ""}`}
                        onClick={this.props.onClick}
                        disabled={this.props.disabled}
                    >
                        {this.props.children}
                    </button>
                </div>
            );
        }
    }
}

export default Button;
