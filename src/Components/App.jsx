import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../main.css";
import SeachBar from "./SearchBar/SearchBar";
import Youtube from "./Api/Youtube.jsx";
import VideoList from "./Videos/videoList";
import VideoDetail from "./VideoDetail/VideoDetail";

class App extends React.Component {
  state = { videos: [], SelectedVideo: null };

  // Api Call on Enter press
  onSeacrhSubmit = async (InputText) => {
    const response = await Youtube.get("./search", {
      params: {
        q: InputText,
      },
    });

    this.setState({ videos: response.data.items  , SelectedVideo:null});
  };

  // Some terms for random Videos
  componentDidMount = () => {
    this.onSeacrhSubmit("animals , books , dramas , songs , movies , stories , creative , asmr , food , draw , art , anime  , hollywood , bollywood , lollywood");
  };


  // OnVideoClick Callback fn
  onVideoSelect = (video) => {
    this.setState({ SelectedVideo: video});
  };

  render() {
    return (
      <div className="container-flex">
        {/* Row-1 SearchBar */}

        <div className="row w-100">
          <div className="col-md-7 col-sm-11 mx-auto mt-3">
            <SeachBar onFormSubmit={this.onSeacrhSubmit} />
          </div>
        </div>

        {/* Row-2 OnVideoClick*/}

        <div className="row w-100 d-flex justify-content-center">
          <div className="col col-md-8 col-lg-8 col-sm-11 col-xsm-11 mt-4">
            <VideoDetail video={this.state.SelectedVideo} />
          </div>
        </div>

        {/* Row-3 VideoList*/}
        <div className="row w-100 d-flex justify-content-center mt-4">
          <div className="col-md-8">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
      // Main Container End
    );
  }
}

export default App;
