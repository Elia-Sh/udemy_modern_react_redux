import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCQ5u5CSDlUtL9wfWtYbbRRgz4gsgPPNgQ';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videosList: [] };

        // call for youtube API with: key, what to search and the callback function to store the response
        YTSearch( {key: API_KEY, term: "sufrboards"}, 
            // the arrow function is the callback functiojn
            // (returnedVidList) => {
                //this.setState( {videos: returnedVidList} );
            // key name and value variable are can be the same and use the es6 syntax -
            // see: https://www.udemy.com/react-redux/learn/v4/t/lecture/4288076?start=0 
            // at: 6:20
            // same as: this.setState({videosList : videosList});
            (videosList) => {
                this.setState({videosList});
            }
        );
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videosList = {this.state.videosList} />
            </div>
        );
    }
}


ReactDOM.render(<App />, 
                document.querySelector('.container'))