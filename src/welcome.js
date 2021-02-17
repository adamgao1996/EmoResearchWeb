import React from 'react';
import './welcome.css';
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

class Welcome extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      mturkID: '',
      agree: false,
      errormessage:'',
      loginSuccess:false
    }
  }

  onChangeField = (event)=> {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    // if (nam === "agree") {
    //   if (!val) {
    //     err = <strong>You must agree the consent before participte the study</strong>;
    //   }
    // }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }

  onSubmit = (event)=>{
    event.preventDefault();
    let agreed = this.state.agree;
    if (!agreed) {
      alert("You must agree the consent before participte the study");
    }else{
      this.setState({loginSuccess: true});
      this.props.history.push('/vediopage'); 
    }
  }


 // renderComp(){
 //   if(this.state.loginSuccess===true){
 //      return(
 //    <Link to="/survey"><button>Next</button></Link>
 //  );
 //    }
 //    else{
 //        return(<div>not agreed consent form yet</div>)
 //    }
 // }

  render() {
    let greeting = ''
    if(this.state.mturkID !== ''){
      greeting = <h1>Hello {this.state.mturkID}</h1>
    }
    
    return (
      <div className="Welcome tl">
         <Banner
            logo="EmoResearch"
          />

        <h1>Welcom to the EmoResearch</h1>
        <p>powered by Cornell Tech</p>

        {greeting}

        <div className="consent" >
          {consent}
        </div>
         <br/>


        <form onSubmit={this.onSubmit}>

          <input type="checkbox" 
            name="agree" 
            onChange={this.onChangeField}
          />
         By ticking this box, you are agreeing to be in the study. Be sure that questions you have about the study have been answered and that you understand what you are being asked to do. You may contact the researcher if you think of a question later. You are free to leave the experiment at any time and refusing to be in the experiment.
          
        <br/>
        <br/>


          <input
            type='submit'
          />

        </form>
          {this.state.errormessage}
      </div>

    );
  }
}





export default withRouter(Welcome);
