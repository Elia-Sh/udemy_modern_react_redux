import React, {Component} from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video // replaced by ({video}) es6 syntax sugar
    // console.log(video)

    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        //TODO convert onVideoSelect arrow function to a normal function
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>

        </li>
    );
};

export default VideoListItem;

// export default class VideoListItem extends Component {
//     constructor(props) {
//         super(props);
//         console.log("in VideoListItem")
//     }
//     render () {
//         return (
//             <li>Video</li>
//         );
//     }
// }