import React, { Component } from "react";
type CounterProp ={
    message:string
}
type CounterState ={
    count:number
}
export class CounterClass extends Component<CounterProp,CounterState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prev) => ({ count: prev.count + 1 })); // Fixed the setState syntax
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>increment</button>
                {this.state.count}
                {this.props.message}
            </div>
        );
    }
}
