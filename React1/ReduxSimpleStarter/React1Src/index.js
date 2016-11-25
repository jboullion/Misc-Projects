/* Modules */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

/* Components */
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

/* API KEYS */
const YT_API_V3 = 'AIzaSyCU7PaAWMhHLR2asIR6GN5uKkzHAullczk';

// CREATE component - stores and produces HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('dbz abriged')
  }

  videoSearch(term){
    YTSearch({key:YT_API_V3, term: term, maxResults: 10}, (videos) => {
      this.setState({
          videos: videos,
          selectedVideo: videos[0]
       });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//RENDER -> DOM generated HTML
ReactDOM.render(<App></App>, document.querySelector('.container'));
