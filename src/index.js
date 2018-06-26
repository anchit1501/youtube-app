import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import Searchbar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCUferbQuY6fpLpG07OHmqaycL6orcY58s';

class App extends Component {

    constructor(props){
        super(props);
        
        this.state={videos:[],
        selectedVideo:null};/*setting 1st video as default video */


        YTSearch({key:API_KEY,term:'batman'},(videos)=>{
            this.setState({videos:videos,
            selectedVideo:videos[0]});/*in an object whenever the key and value are identical terms  we can refactor from this.setState({videos:videos}) to the implied one*/
        });/*putting serach function in cosntructor will call the search api instantly whenever the instance of index.js is created */
    }
        render(){
            return (
                <div> 
                <Searchbar />
                <VideoDetail video={this.state.selectedVideo}/>{/*passing data from parent to data is called props */}
                <VideoList 
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos} /> {/*updates app state to selected video, we pass this as property to video list and which further passes it to video list items and callbacks the function on click*/}
                 </div>);
            }
        }

        ReactDom.render( <App /> , document.querySelector('.container'));
        
        
        
        
          /*downwards data flow*/