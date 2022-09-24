import React from "react";

export class StepTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      accidentyes: "",
      accidentno: ""
    };
    this.handleAccidentYes = this.handleAccidentYes.bind(this);
    this.handleAccidentNo = this.handleAccidentNo.bind(this);
  }

  handleAccidentYes(event) {
    this.setState({ accidentyes: event.target.value });
  }

  handleAccidentNo(event) {
    this.setState({ accidentno: event.target.value });
  }

  render() {
    return (
      <div>
        
          <div>
            <label>2. HAS THE ACCIDENT EVER OCCURED?</label>
            <input
              className="u-full-width required"
              type="radio"
              onChange={this.handleAccidentYes}
              value={this.state.accidentyes}
              name="accident"
              
            />
             <label for="Yes">Yes</label><br/>
             <input
              className="u-full-width"
              
              type="radio"
              onChange={this.handleAccidentNo}
              value={this.state.accidentno}
              name="accident"
            />
            <label for="No">No</label><br/>
          </div>
        
      </div>
    );
  }
}
