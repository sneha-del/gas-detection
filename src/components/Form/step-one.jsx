import React from "react";

export class StepOne extends React.Component {
  constructor() {
    super();
    this.state = {
      smokeyes: "",
      smokeno: "",
    };
    this.handleSmokeYes = this.handleSmokeYes.bind(this);
    this.handleSmokeNo = this.handleSmokeNo.bind(this);
  }

  handleSmokeYes(event) {
    this.setState({ smokeyes: event.target.value });
  }

  handleSmokeNo(event) {
    this.setState({ smokeno: event.target.value });
  }

  render() {
    return (
      <div>
           <div>
            <label>
              1. IS THERE A SMOKE ALARM SYSTEM INSTALLED AT YOUR WORKPLACE
            </label>

            <input
              className="u-full-width"
              type="radio"
              onChange={this.handleSmokeYes}
              value={this.state.smokeyes}
              name="smoke"
            />
            <label for="Yes">Yes</label>
            <br />
            <input
              className="u-full-width"
              placeholder="Last Name"
              type="radio"
              onChange={this.handleSmokeNo}
              value={this.state.smokeno}
              name="smoke"
            />
            <label for="No">No</label>
            <br />
          </div>
      </div>
    );
  }
}
