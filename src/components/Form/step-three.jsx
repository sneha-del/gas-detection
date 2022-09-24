import React from "react";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: ""
    };
    this.handleCity = this.handleCity.bind(this);
    this.handleCountry = this.handleCountry.bind(
      this
    );
  }

  handleCity(event) {
    this.setState({ city: event.target.value });
  }

  handleCountry(event) {
    this.setState({ country: event.target.value });
  }

  render() {
    return (
      <div>
        <div >
          <div>
            <label>City</label>
            <input
              className="u-full-width required"
              placeholder="City"
              type="text"
              onChange={this.handleCity}
              value={this.state.city}
              autoFocus
            />
          </div>
        </div>
        <div >
          <div >
            <label>Country</label>
            <input
              className="u-full-width"
              placeholder="Country"
              type="text"
              onChange={this.handleCountry}
              value={this.state.country}
            />
          </div>
        </div>
      </div>
    );
  }
}
