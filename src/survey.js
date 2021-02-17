import React from 'react';
import './welcome.css';
import {consent} from './consent.js'
import {Scrollbar} from 'react-scrollbars-custom'
import Banner from 'react-banner'
import 'react-banner/dist/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import VedioPage from './vediopage'

class Survey extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      mturkID: props.mturkID,
    }
  }


// onSubmit = (event)=>{
//     this.props.history.push('/vediopage'); 
//             <form onSubmit={this.onSubmit}>
//           <input type='submit' />
//         </form>
//   }

render() {

    return (

      <div>
        


        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvJT555FfUcCs5oXNrT273LY7cSlAv5vw0Bf1FjRepVTtpZg/viewform?embedded=true" width="640" height="1050" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
     </div>

    );
  }
}


export default withRouter(Survey);

