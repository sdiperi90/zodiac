import React, { Component } from "react";
import { Link } from "react-router-dom";

class BirthDayPicker extends Component {
    state = {
        day: "",
        month: ""
    };

    // handleDateInput gets value from user's input change of date and month and updates the state

    handleDateInput = (e, date) => {
        this.setState({
            [date]: e.target.value
        });
    };
    render() {
        return (
            <div className="form-container">
                <h1>Your Birthday</h1>
                <form
                    onClick={e => {
                        this.props.handleZodiacPick(
                            e,
                            this.state.day,
                            this.state.month
                        );
                    }}
                >
                    <select
                        onChange={e => {
                            this.handleDateInput(e, "day");
                        }}
                        className="dates"
                        name="dates"
                    >
                        <option diabled>Select day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select
                        onChange={e => {
                            this.handleDateInput(e, "month");
                        }}
                        name="Months"
                    >
                        <option>Select Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <Link to="/birthday">
                        <button
                            className="submit-btn"
                            type="submit"
                            value="Find My Sign"
                        >
                            Find My Sign
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default BirthDayPicker;
