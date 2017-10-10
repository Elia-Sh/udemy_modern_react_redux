import React, {Component} from 'react';

import VideoListItem from './video_list_item';

// TODO what is between defining the component with const and with class


// const VideoList = (props) => {
//     return (
//         <ul className="col-md-4 list-group">
//             {props.videosList.length}
//         </ul>
//     )
// }

// export default VideoList;

export default class VideoList extends Component {
    constructor(props) {
        super(props);
        console.log("videosList is: " + props.videosList.length);
        const videoItemsMap = props.videosList.map((video) => {
            // return <VideoListItem videoItem={video} />
            return <VideoListItem />
        });
        console.log("map is: " + videoItemsMap);
    }
    render () {
        return (
            <ul className="col-md-4 list-group">
            {this.props.videosList.length}

                {this.videoItemsMap}
                <VideoListItem/>
            </ul>
        );
    }
}