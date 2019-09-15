import React from "react";
import Zodiac from "./Zodiac";
import ZodiacIcon from "./ZodiacIcon";
const images = [
    { src: "aries2.jpg" },
    { src: "taurus2.jpg" },
    { src: "gemini2.jpg" },
    { src: "cancer2.jpg" },
    { src: "leo2.jpg" },
    { src: "virgo2.jpg" },
    { src: "libra2.jpg" },
    { src: "scorpio2.jpg" },
    { src: "sagittarius2.jpg" },
    { src: "capricorn2.jpg" },
    { src: "aquarius2.jpg" },
    { src: "pisces2.jpg" }
];

const ZodiacsList = props => {
    return (
        <div className="container">
            {/* in below code, mapped through images array and passed src to render images */}
            {images.map((image, index) => {
                return <ZodiacIcon key={index} image={image} />;
            })}
        </div>
    );
};

export default ZodiacsList;
