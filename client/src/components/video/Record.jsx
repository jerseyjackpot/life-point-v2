import React from "react";
import RecordRTC from "recordrtc";
import "./Record.css";

class CameraRecorder extends React.Component {
  constructor(props) {
    super(props);

    // Getting Today's Date
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        "-T-" +
        today.getHours() +
        "-" +
        today.getMinutes();

    // States
    this.state = {
      recordVideo: null,
      currentDate: date,
      dataUrl: null,
      started: false,
      recorded: false,
    };

    // Binding Functions
    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
    this.downloadRecording = this.downloadRecording.bind(this);
    this.getUserMedia = this.getUserMedia.bind(this);
  }

  requestUserMedia() {
    this.getUserMedia((stream) => {
      this.setState({ src: window.URL.createObjectURL(stream) });
    });
  }
  
  // Record Button
  startRecord() {
    if (this.state.recorded){
      window.location.reload();
    }

    this.getUserMedia((stream) => {
      this.setState({
        recordVideo: RecordRTC(stream, { type: "video" }),
      });

      var constraints = { audio: true, video: { width: 1280, height: 720 } };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (mediaStream) {
          var video = document.querySelector("video");

          video.srcObject = mediaStream;
          video.onloadedmetadata = function (e) {
            video.play();
          };
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message);
        });

      this.state.recordVideo.startRecording();
      this.setState({
        started: true,
      });
    });
  }
  // Stop button
  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      this.setState({
        dataUrl: window.URL.createObjectURL(this.state.recordVideo.getBlob()),
        recorded: true,
        started: false,
      });
    });
  }
  // Download button
  downloadRecording() {
    this.state.recordVideo.save(this.state.currentDate);
  }

  // Prompts user for permission to use their camera and microphone
  getUserMedia(callback) {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia ||
      navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { audio: true, video: { width: 1280, height: 720 } },
        callback,
        (error) => alert(JSON.stringify(error))
      );
    }
  }

  // Renders the video recorder
  render() {
    return (
      <div className="record-container">
        <h1 className="white-text">Video Recorder</h1>
        <div className="box">
          <Clip url={this.state.dataUrl} controls={this.state.recorded}></Clip>
          {this.state.started ? (
            ""
          ) : (
            <button
              onClick={this.startRecord}
              className={this.state.recorded ? "wid-100" : ""}
            >
              {this.state.recorded ? "Record Again" : "Start Record"}
            </button>
          )}
          {this.state.recorded ? (
            <button onClick={this.downloadRecording} className="wid-100">
              Download Recording
            </button>
          ) : this.state.started ? (
            <button onClick={this.stopRecord} className="cl-danger">
              Stop Record
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

// Plays back the previously recorded clip
function Clip({ url, controls }) {
  return (
    <video className="vid" controls={controls} autoPlay muted key={url}>
      <source src={url} />
    </video>
  );
}

export default CameraRecorder;
