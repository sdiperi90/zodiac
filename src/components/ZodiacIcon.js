import React from "react";
import { Link } from "react-router-dom";

// on ZodiacIcon functional Component destructured props obj as following: { image }
const ZodiacIcon = ({ image }) => {
    return (
        <div>
            <div className="zodiac-images-component">
                <Link to={`/zodiac/${image.src.split("2")[0]}`}>
                    {/* in below img element, used require() to import my images from images folder */}
                    <img src={require(`../images/${image.src}`)} />
                </Link>
            </div>
        </div>
    );
};

export default ZodiacIcon;
