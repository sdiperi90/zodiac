import React from "react";
import Zodiac from "./Zodiac";

// on ZodiacPage functional Component destructured props obj as following: { match, zodiac, zodiacArr }

const ZodiacPage = ({ match, zodiac, zodiacArr }) => {
    let selectedZodiac = "";
    if (zodiac) {
        selectedZodiac = zodiac;
    } else {
        selectedZodiac = zodiacArr.filter(zodiac => {
            return zodiac.name.toLowerCase() === match.params.name;
        });
    }

    return <Zodiac zodiac={selectedZodiac[0]} />;
};

export default ZodiacPage;
