import React from 'react';

class CounterClassComponentSideEffect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
        };

        this.updateWindowTitle = this.updateWindowTitle.bind(this);

    }

    updateWindowTitle() {
        document.title = `You clicked ${this.state.value} times`;
    }

    componentDidMount() {
        this.updateWindowTitle();
    }
    componentDidUpdate() {
        this.updateWindowTitle();
    }

    render() {
        return (
            <div>
                <p>Current value: {this.state.value}</p>
                <button onClick={() => this.setState({ value: this.state.value + 1 })}>
                    Increment
                </button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button onClick={() => this.setState({ value: this.state.value - 1 })}>
                    Decrement
                </button>
            </div>
        )
    }

}

export default CounterClassComponentSideEffect;