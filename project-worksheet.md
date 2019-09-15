# Project Overview

## Project Schedule

| Day        | Deliverable                                          | Status   |
| ---------- | ---------------------------------------------------- | -------- |
| January 14 | Project Description                                  | Complete |
| January 14 | Wireframes / Priority Matrix / Functional Components | Complete |
| January 15 | Core Application Structure (HTML, CSS, etc.)         | Complete |
| January 15 | Pseudocode / actual code                             | Complete |
| January 16 | Initial Clickable Model                              | Complete |
| January 17 | MVP                                                  | Complete |
| January 18 | Present                                              | Complete |

## Project Description

<!-- ******** -->

There are 12 zodiac signs, and each sign has its own strengths and weaknesses, its own specific traits, desires and attitude towards life and people. The application gives a glimpse of a person's basic characteristics, preferences, flaws and fears based on zodiac sign.

Users will be able to find out what their zodiac sign is, Its complete profile and it's compatibility with other zodiac signs. By selecting your sign from the detailed zodiac sign dates list you will discover everything on the character of your Sun sign, it's Horoscope, traits, profile, history, myth and love compatibility.

<!-- ************ -->

## API:

Link: "https://zodiacal.herokuapp.com/"

## Wireframes

https://drive.google.com/drive/folders/1Ms1EunBbTsWeUaG8F2-8WZBY2VD_BQHJ?ths=true

## Priority Matrix

https://drive.google.com/drive/folders/1kCLuJbV2SMbQ9MBm6gwvfAvCzSQmxSga?ths=true

### MVP/PostMVP - 5min

#### MVP

A. Find and use API,
B. Render data from API on page
C. Create Components
D. Create Nav Bar with Links and Routers to navigate to pages
E. Pass data through props to child Components and render
F. Filter data from API using map() or filter() to render only relevant data
G. Add Conditional rendering based on user's input search

#### PostMVP

H. User Login
I. Add Daily Horoscope to favorite list,
J. Find your compatible Zodiac (scratch image)

## React Architectural Design

<!-- ********** -->

LINK: the React components and the architectural design https://drive.google.com/drive/folders/1Y5GIdMaEQw5xQWLBByP7Ygk3LVVaxvHq?ths=true

## Functional Components

| Component    |                           Description                           |
| ------------ | :-------------------------------------------------------------: |
| Header       |           This will render the header include the nav           |
| ZodiacList   | This will render images of Zodiacs and search bar by birth date |
| Zodiac       |      This will render the specific Zodiac searched by User      |
| ElementsList |                    This will render Element                     |
| Element      |            This will render the Zodiacs by Elements             |
| Footer       |           This will render the header include the nav           |

| Component                                                  | Priority | Estimated Time | Actual Time |
| ---------------------------------------------------------- | :------: | :------------: | :---------: |
| Find and use API                                           |   MVP    |      2hrs      |   2.5hrs    |
| Render data from API on page                               |   MVP    |      2hrs      |   1.5hrs    |
| Create Components                                          |   MVP    |      3hrs      |    5hrs     |
| Create Nav Bar with Links and Routers to navigate to pages |   MVP    |     3.5hrs     |    4hrs     |
| Pass data through props to child Components and render     |   MVP    |     2.5hrs     |    2hrs     |
| API using map() or filter() to render only relevant data   |   MVP    |      5hrs      |    6hrs     |
| Add Conditional rendering based on user's input search     |   MVP    |      6hrs      |    5hrs     |

## Helper Functions

Map(),
Filter(),
moment(),
require()

| Function  |                                                Description                                                |
| --------- | :-------------------------------------------------------------------------------------------------------: |
| Map()     | Create a new array with the results of calling a provided function on every element in the calling array. |
| Filter()  | This will creates a new array with all elements that pass the test implemented by the provided function.  |
| moment()  |                  Parse, validate, manipulate, and display dates and times in JavaScript.                  |
| require() |                        Import statement on your parent component to render images                         |

## Additional Libraries

| Library   |                                                          What it Does                                                           |
| --------- | :-----------------------------------------------------------------------------------------------------------------------------: |
| Moment JS | Moment.js is a free and open source JavaScript library that removes the need to use the native JavaScript Date object directly. |
|           |                                                                                                                                 |

## Code Snippet

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

    fetchZodiac = async () => {
        let zodiacData1 = await axios("https://zodiacal.herokuapp.com/api");
        this.setState({
            data: zodiacData1.data,
            dataLoaded: true
        });
        console.log(zodiacData1);
    };

## Change Log

| Original Plan                 |                            Outcome                             |
| ----------------------------- | :------------------------------------------------------------: |
| Render zodiac on click of img | Rendered Individual Zodiac based on User's Date of Birth input |
|                               |                                                                |

## Issues and Resolutions

**ERROR**: Had issues rendering Individual Zodiac based on User's Date of Birth Input. Checking in which Zodiac dates range the user's date of birth fall was the challenge
**RESOLUTION**: Used moment() library to overcome the challenge. Moment() has isBetween() helper function which checks for date range

API: "https://zodiacal.herokuapp.com/"
