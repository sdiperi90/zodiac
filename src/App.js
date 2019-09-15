import React, { Component } from "react";
import "./styles/style.scss";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import moment from "moment";
import ZodiacPage from "./components/ZodiacPage";

class App extends Component {
    state = {
        data: "",
        selectedId: "",
        dataLoaded: false,
        zodiac: "",
        birthday: ""
    };

    // handleZodiacPick method runs when user click submit birthday button
    // and invokes getZodiac() with user's birthday parameters to find user's Zodiac, and filters
    // through API data and returns object only for that Zodiac, and finally updates state

    handleZodiacPick = (e, day, month) => {
        e.preventDefault();
        console.log(day);
        let birthday = `${month}-${day}`;
        let userZodiac = this.getZodiac(birthday);
        console.log(birthday);
        this.setState(prevState => {
            let zodiac = prevState.data.filter(sign => {
                return sign.name.toLowerCase() === userZodiac;
            });
            return { birthday, zodiac };
        });
        console.log("Clicking");
    };

    // getZodiac method takes user's entered birthday and checks for every Zodiac range by using moment().
    // if the user's bday fall in the range of specific Zodiac it will return the name of that Zodiac

    getZodiac = birthday => {
        function dayBetween(start, end) {
            return moment(birthday).isBetween(start, end);
        }
        if (dayBetween("03-20", "04-20")) {
            return "aries";
        } else if (dayBetween("04-20", "05-21")) {
            return "taurus";
        } else if (dayBetween("05-21", "06-21")) {
            return "gemini";
        } else if (dayBetween("06-21", "07-23")) {
            return "cancer";
        } else if (dayBetween("07-23", "08-23")) {
            return "Leo";
        } else if (dayBetween("08-23", "09-23")) {
            return "virgo";
        } else if (dayBetween("09-23", "10-23")) {
            return "libra";
        } else if (dayBetween("10-23", "11-22")) {
            return "scorpio";
        } else if (dayBetween("11-22", "12-22")) {
            return "sagittarius";
        } else if (dayBetween("12-22", "01-20")) {
            return "capicon";
        } else if (dayBetween("01-20", "02-18")) {
            return "aquarius";
        } else if (dayBetween("02-18", "03-20")) {
            return "capicon";
        }
    };

    // used axios to make API call and get data from API

    fetchZodiac = async () => {
        let zodiacData1 = await axios("https://zodiacal.herokuapp.com/api");
        this.setState({
            data: zodiacData1.data,
            dataLoaded: true
        });
        console.log(zodiacData1);
    };

    async componentDidMount() {
        this.fetchZodiac();
        console.log(moment("2-20").isBetween("2-19", "2-25"));
    }

    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    <Route
                        exact
                        path="/"
                        render={() =>
                            this.state.dataLoaded && (
                                <HomePage
                                    handleZodiacPick={this.handleZodiacPick}
                                />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/birthday"
                        render={() =>
                            this.state.zodiac && (
                                <ZodiacPage zodiac={this.state.zodiac} />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/zodiac/:name"
                        render={props =>
                            this.state.dataLoaded && (
                                <ZodiacPage
                                    {...props}
                                    zodiacArr={this.state.data}
                                />
                            )
                        }
                    />
                </main>

                <Footer />
            </div>
        );
    }
}

export default App;
