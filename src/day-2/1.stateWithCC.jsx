import { Component } from "react";

class StateWithCC extends Component {
  state = {
    counter: 10,
    vikasKaCounter: 5000,
    khushikaCounter:1000,
    name: "Khushi",
  };

  onCounterUpdate = () => {
    //this.state.counter += 1;

    this.setState({
      counter: this.state.counter + 1,
    });
  };

  onCounterVCUpdate = () => {
    this.setState({
      vikasKaCounter: this.state.vikasKaCounter + 1,
    });
  };

  onCounterKCUpdate=()=>{
    this.setState({
        khushikaCounter:this.state.khushikaCounter + 1,
    });
  };

  render() {
    return (
      <div>
        <p>
          Counter {this.state.counter} {this.state.vikasKaCounter}{this.state.khushikacounter}
        </p>
        <input type="text" />
        <button onClick={this.onCounterUpdate}>Increment</button>
        <button onClick={this.onCounterVCUpdate}>Increment VC</button>
        <button onClick={this.onCounterKCUpdate}> Increment KC</button>
      </div>
    );
  }
}

export default StateWithCC;
