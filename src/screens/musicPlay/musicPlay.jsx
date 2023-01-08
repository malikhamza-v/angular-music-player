import React, { Component } from "react";
import "./musicPlay.css";

import Navbar from "../../components/navBar/navbar";
import musicImage from "../../assets/music_image.jpg";
import Music from "../../assets/sickofu.mp3";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import WaveSurfer from "wavesurfer.js";
import convertSeconds from "convert-seconds";

import PauseIcon from "@mui/icons-material/Pause";

class MusicPlay extends Component {
  state = {
    playing: false,
  };

  componentDidMount() {
    const track = document.querySelector("#track");

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
      progressColor: "#EFEFEF",
      responsive: true,
      waveColor: "#454545",
      cursorColor: "transparent",
      barGap: 2.5,
      barRadius: 5,
    });
    this.waveform.load(track);
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };

  render() {
    return (
      <div className="musicPlay">
        <Navbar />
        <div>
          <img src={musicImage} alt="Music Album" className="music_image" />
        </div>
        <div className="musicBottomContainer">
          <div className="music_info">
            <h4>First Class</h4>
            <div className="producerAndGenre">
              Jack Harlow <div className="dotSeparator"></div> Hip Hop
            </div>
          </div>
          <div className="waveformContainer">
            <div id="waveform" className="waveform" />
          </div>
          <audio id="track" src={Music} />
          <div className="playerControls">
            <VolumeUpIcon />
            <SkipPreviousIcon className="skipPrevButton" />
            {!this.state.playing ? (
              <PlayArrowIcon onClick={this.handlePlay} className="playButton" />
            ) : (
              <PauseIcon onClick={this.handlePlay} className="playButton" />
            )}
            <SkipNextIcon className="skipNextButton" />
            <StarBorderIcon className="starButton" />
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPlay;
