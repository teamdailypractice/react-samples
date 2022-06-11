import React from 'react';

//https://reactjs.org/docs/forms.html
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', searchResult: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //  alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        if (this.state.value !== this.state.searchResult) {
            this.setState({
                value: '',
                searchResult: this.state.value
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <p>{this.state.searchResult}</p>
            </div>

        );
    }
}

export default NameForm;