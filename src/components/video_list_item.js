import React, {Component} from 'react';

export default class VideoListItem extends Component {
    constructor(props) {
        super(props);
        console.log("in VideoListItem")
    }
    render () {
        return (
            <li>{ this.props.videoItem }</li>
        );
    }
}