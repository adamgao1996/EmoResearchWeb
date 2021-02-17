import React from 'react';
import YouTube from 'react-youtube';
import './vediopage.css';
import {consent} from './consent.js'
import {Scrollbar} from 'react-scrollbars-custom'
import Banner from 'react-banner'
import 'react-banner/dist/style.css'
import Survey from './survey';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";



class VedioPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      step: 0
    }
  }
  handleClickNext() {
    var newstep = this.state.step+1
    if(newstep == 4){
      this.props.history.push('/survey'); 
    }
    this.setState({step: newstep});
  }
  handleClickBack() {
    var newstep = this.state.step-1
    if (newstep<0){
      newstep = 0;
    }
    this.setState({step: newstep});
  }
   renderComp(){
     if(this.state.step===0){
        return(
          <div>
            <h1>1. Download MyResearchApp App from App store</h1> 
            <h1>2. Open the MyResearchApp App and nevigate to EmoResaerch, and enter your mturkID</h1> 
            <h1>3. Make sure all the access has been granted</h1>
            <h2>4. Turn on the flashlight by cliking the flash button on the scrren.</h2>
            <h2>5. By placing the index fingure on the wide-angle camera as well as the flash light you would be able to see the pulse on the screen</h2>
          </div>
        );
      }
      else if(this.state.step===1){
        return(
          <div>
            <h1>In the next page you will see a vedio</h1>
            <h1>click start on phone at the same time as cliking the play button on the browser</h1>
            <h1>Please watch til the end of the vedio and wait for 20 more second before you click stop on the App</h1>
          </div>
        );
      }
      else if(this.state.step===2)
          {return(
            <div>
            <h1>please click start on both of the devices, and wait for 20 more seconds after the vedio stop. Then click stop on the app</h1>
            <figure>
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "90%"
                    }}
                    src={`https://www.youtube.com/embed/2g811Eo7K8U`}
                    frameBorder="0"
                  />
                  <figcaption>Please click the start button at the same time of the record button on the app</figcaption>
                </figure>
              </div>
            );
      }
      else{
        return(
          <div>
            <h1>Great Job!</h1>
            <h1> Think about what emotion you have activated </h1>
            <h1> last task is to fill out the next questionaire</h1>
          </div>
        );
      }
    }
   

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
       {this.renderComp()}
        <button onClick={() => this.handleClickBack()}>
          Back
        </button>
        <button onClick={() => this.handleClickNext()}>
          Next
        </button>
      </div>
      );
  }
 


  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default withRouter(VedioPage);