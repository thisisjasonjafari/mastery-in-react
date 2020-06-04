import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {


    render() {
        console.log("Counters - log")
        const { onReset, counters, onDelete, onIncrement ,onDecrement} = this.props

        return (
            <React.Fragment>
                <button

                    onClick={onReset}
                    className="btn btn-primary btn-sm m2"
                >Reset</button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}

                    />)}
            </React.Fragment>
        );
    }
}

export default Counters;
