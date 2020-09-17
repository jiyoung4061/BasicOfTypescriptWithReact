import React, { Component } from "react";
import { Form, Input } from "./Input";
import Number from "./Number";

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };

  render() {
    const { counter, name } = this.state;

    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => { //htmlInputElement => target을 의미함! 만약 input이아니라 selectInput이라면 이거도 바꿔야함
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  add = () => {
    // this.setState({counter:'hello'}) //error!
    this.setState((prev) => {
      return {
        counter: prev.counter + 1, //typescript에는 해당 component에 state가 없음! => component에게 state를 줘야함.
      };
    });
  };
}

export default App;
