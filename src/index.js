import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCQ5u5CSDlUtL9wfWtYbbRRgz4gsgPPNgQ';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videosList: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

    }
    
    videoSearch(term) {
        // call for youtube API with: key, what to search and the callback function to store the response
        YTSearch( {key: API_KEY, term: term}, 
            // the arrow function is the callback functiojn
            // (returnedVidList) => {
                //this.setState( {videos: returnedVidList} );
            // key name and value variable are can be the same and use the es6 syntax -
            // see: https://www.udemy.com/react-redux/learn/v4/t/lecture/4288076?start=0 
            // at: 6:20
            // same as: this.setState({videosList : videosList});
            (videosList) => {
                this.setState({
                    videosList: videosList,
                    selectedVideo: videosList[0]
                });
            }
        );
        
    }

    render() {
        //using load for debouncing - see: https://www.udemy.com/react-redux/learn/v4/t/lecture/4288100?start=0
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        //TODO change selectedVideo from arrow function to function with a name..
        //TODO after adding "onVideoSelect", console shows errors: Uncaught (in promise) DOMException: Not a top-level browsing context.
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videosList={this.state.videosList} />
            </div>
        );
    }
}


ReactDOM.render(<App />, 
                document.querySelector('.container'))