import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    render() {
    return (
        <div className="search-bar">
            <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            {/* Value of input: {this.state.term} */}
        </div>
        );
    }

    onInputChange(term){
        // store the term in the state
        this.setState({term});
        // call the callback function on the serach term
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;