import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    render() {
    return (
        <div>
            <input
                value={this.state.term}
                onChange={this.onInputChange.bind(this)} />
            {/* Value of input: {this.state.term} */}
        </div>
        );
    }

    onInputChange(eventObject){
        // console.log(eventObject.target.value);
        this.setState({term: eventObject.target.value});
    }

}

export default SearchBar;