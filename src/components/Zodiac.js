import React from "react";

// on Zodiac functional Component destructured props obj as following: { zodiac }

const Zodiac = ({ zodiac }) => {
    return (
        <div className="zodiac-container">
            <div className="zodiac-title">
                <h1>
                    {zodiac.name} ({zodiac.sun_dates[0]} - {zodiac.sun_dates[1]}
                    )
                </h1>
            </div>
            <div className="zodiac-page-image">
                <img
                    src={require(`../images/${zodiac.name.toLowerCase()}.jpg`)}
                />
            </div>

            <div className="sub-container">
                <h2>
                    The Ruling Planet is {zodiac.ruling_planet[0]},{" "}
                    {zodiac.ruling_planet[1]}
                </h2>
                <h2>Vibe: {zodiac.vibe}</h2>
            </div>

            <div className="traits-container sub-container">
                <div className="traits">
                    <h2>Good Traits:</h2>

                    <ul>
                        {zodiac.good_traits.map((trait, index) => {
                            return <li key={index}>{trait}</li>;
                        })}
                    </ul>
                </div>
                <div className="traits">
                    <h2>Bad Traits:</h2>
                    <ul>
                        {zodiac.bad_traits.map((trait, index) => {
                            return <li key={index}>{trait}</li>;
                        })}
                    </ul>
                </div>
            </div>

            <div className="sub-container">
                <h2>Secret Wishes: </h2>
                <ul>
                    {zodiac.secret_wish.map((wish, index) => {
                        return <li key={index}>{wish}</li>;
                    })}
                </ul>
            </div>
            <div className="sub-container">
                <h2>Hates</h2>
                <p>
                    {zodiac.hates.map(hate => {
                        return `${hate}, `;
                    })}
                </p>
            </div>
            <div className="sub-container">
                <h2>Favorites</h2>
                <p>
                    {zodiac.favorites.map(favorite => {
                        return `${favorite}, `;
                    })}
                </p>
            </div>
            <div className="sub-container">
                <h2>Mental Traits</h2>
                <p>
                    {zodiac.mental_traits.map(trait => {
                        return `${trait}. `;
                    })}
                </p>
            </div>
            <div className="sub-container">
                <h2>{zodiac.name} is compatibile with</h2>
                <ul>
                    {zodiac.compatibility.map((element, index) => {
                        return <li key={index}>{element}</li>;
                    })}
                </ul>
            </div>
            <div className="famous-people sub-container ">
                <div>
                    <h2>Famous people:</h2>
                    <ul className="famous-list">
                        {zodiac.famous_people.map((person, index) => {
                            return <li key={index}>{person}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Zodiac;
