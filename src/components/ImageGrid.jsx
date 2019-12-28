import React from "react";
import "../css/imagegrid.scss";

export const ThreeMosaic = props => {
    const { img1, img2, img3, direction, openedImage, numbers } = props;
    return (
        <div className={`mosaic ${direction}`}>
            <div className={"left"}>
                <img
                    src={img1}
                    alt=""
                    onClick={() => openedImage(numbers[0])}
                />
            </div>
            <div className={"right"}>
                <img
                    src={img2}
                    alt=""
                    onClick={() => openedImage(numbers[1])}
                />
                <img
                    src={img3}
                    alt=""
                    onClick={() => openedImage(numbers[2])}
                />
            </div>
        </div>
    );
};

export const BigPicture = props => {
    const { img, openedImage, number } = props;
    return (
        <div className="full-width">
            <img src={img} alt="" onClick={() => openedImage(number)} />
        </div>
    );
};

export const SquaredTwoColumns = props => {
    const { img1, img2, openedImage, numbers } = props;
    return (
        <div className="two-columns">
            <img src={img1} alt="" onClick={() => openedImage(numbers[0])} />
            <img src={img2} alt="" onClick={() => openedImage(numbers[1])} />
        </div>
    );
};

export const RectangleTwoColumns = props => {
    const { img1, img2, openedImage, numbers } = props;
    return (
        <div className="two-columns-rectangle">
            <img src={img1} alt="" onClick={() => openedImage(numbers[0])} />
            <img src={img2} alt="" onClick={() => openedImage(numbers[1])} />
        </div>
    );
};

export const Full = props => {
    const { img, openedImage, number } = props;
    return (
        <div className="full">
            <img src={img} alt="" onClick={() => openedImage(number)} />
        </div>
    );
};

export const Triple = props => {
    const { img1, img2, img3, openedImage, numbers } = props;
    return (
        <div className="triple">
            <img src={img1} alt="" onClick={() => openedImage(numbers[0])} />
            <img src={img2} alt="" onClick={() => openedImage(numbers[1])} />
            <img src={img3} alt="" onClick={() => openedImage(numbers[2])} />
        </div>
    );
};
