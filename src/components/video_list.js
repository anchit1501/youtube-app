import React,{Component} from 'react';
import VideoListItem from './video_list_item';

const VideoList=(props)=>{
const videoItems = props.videos.map((video)=>{
        return<VideoListItem 
        onVideoSelect={props.onVideoSelect}/*passing callback to videi_list_item */
        key={video.etag} 
        video={video} />
    });
    return(
        <ul className="col-md-4 list-group">
       {videoItems}
            </ul>
    );
};
export default VideoList;