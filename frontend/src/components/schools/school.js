import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  Button
} from "shards-react";
import { Player, ControlBar } from 'video-react';


const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.sintelTrailer
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.player.load();
    };
  }

  render() {
    return (
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay
        >
          <source src={this.state.source} />
          <ControlBar autoHide={true} />
        </Player>
    );
  }
}


function School() {
  return (
    <Container>
      <Row>
        <Col sm="12" lg="8">
          <Card style={{ maxWidth: "(100%)", margin: "1rem" }}>
            <CardHeader>Course Video</CardHeader>
              <VideoPlayer/>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%", margin: "1rem"}}>
            <CardHeader>Course Note</CardHeader>
            <CardFooter style={{overflow: "scroll", height: "70vh"}}>
              NOTES GOES HERE
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <Button style={{margin: "2rem"}}> Next </Button>
    </Container>
  );
}

export default School;
