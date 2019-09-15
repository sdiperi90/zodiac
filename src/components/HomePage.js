import React, { Component } from "react";
import BirthDayPicker from "./BirthDayPicker";
import ZodiacsList from "./ZodiacsList";

const HomePage = props => {
    return (
        <div className="background-image">
            <ZodiacsList />
            <BirthDayPicker handleZodiacPick={props.handleZodiacPick} />
        </div>
    );
};

export default HomePage;
