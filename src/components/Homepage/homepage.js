import React from 'react';
import {connect} from 'react-redux';
import {checkEmail} from '../../helperFunction/validationCheck';
import Scroll from 'react-scroll';
let Element    = Scroll.Element;
import './homepage.scss';
import InviteForm from './inviteForm';
import request from 'superagent';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



function checkFormValidation(formObj){
  let valid = true ,
      email = true,
      phone = true;

  let obj = {...formObj};

  obj.phoneValid = true;
  obj.emailValid = true;
  obj.nameValid = true;

  if(!obj.name.trim()){
    valid = false;
    obj.nameValid = false;
  }

  if(obj.phone.toString().length !== 10 && obj.phone){
    phone = false;
    obj.phoneValid = false;
  }
  if(!checkEmail(obj.email) && obj.email){
    email = false;
    obj.emailValid = false;
  }

  if((!phone && !email) || (!obj.phone && !obj.email)){
    valid = false;
    obj.phoneValid = false;
    obj.emailValid = false;
  }

  return {formObj : obj, valid : valid};

}


function checkInviteValidation(formObj){
  let valid = true ,
    email = true,
    phone = true;

  let obj = {...formObj};

  obj.phoneValid = true;
  obj.emailValid = true;
  obj.nameValid = true;

  if(!obj.name && !obj.email && !obj.phone){
    return {formObj : obj, valid : valid};
  }



  if(!obj.name.trim()){
    valid = false;
    obj.nameValid = false;
  }

  if(obj.phone.toString().length !== 10 && obj.phone){
    phone = false;
    obj.phoneValid = false;
  }
  if(!checkEmail(obj.email) && obj.email){
    email = false;
    obj.emailValid = false;
  }

  if((!phone && !email) || (!obj.phone && !obj.email)){
    valid = false;
    obj.phoneValid = false;
    obj.emailValid = false;
  }

  return {formObj : obj, valid : valid};
}



const defaultInviteData = [{nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
  {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
  {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
  {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
  {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
  {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" }];





class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state={inviteData : defaultInviteData , registerData : {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" }};
    this.register = this.register.bind(this);
    this.onChange=this.onChange.bind(this);
    this.inviteInputOnChange = this.inviteInputOnChange.bind(this);
  }

  register(type){
    const {registerData, inviteData} = this.state;
    if(type){
      let data1 = checkInviteValidation(inviteData[0]);
      let data2 = checkInviteValidation(inviteData[1]);
      let data3 = checkInviteValidation(inviteData[2]);
      let data4 = checkInviteValidation(inviteData[3]);
      let data5 = checkInviteValidation(inviteData[4]);
      let newArray = [data1.formObj, data2.formObj,data3.formObj,data4.formObj,data5.formObj];
      this.setState({inviteData : newArray});

      if(data1.valid && data2.valid && data3.valid && data4.valid && data5.valid){

        request.
        post( '/save_reg_dat.php').
        send({registeringUser : registerData, referral : newArray}).
        set('Accept', 'application/json').
        end((error, res) => {
         if(error){
           NotificationManager.error('Please contact us at support@goloco.in', 'Something went wrong!', 2000);
         }else{
           NotificationManager.success('', 'Successfully Invited', 2000);
           this.setState({inviteData : defaultInviteData});
         }
        });
      }

    }else{

      let data = checkFormValidation(registerData);
      this.setState({registerData : data.formObj});
      if(data.valid){
        request.
        post('/save_reg_dat.php').
        send({ registeringUser: data.formObj}).
        set('Accept', 'application/json').
        end((error, res) => {
          if(error){
            NotificationManager.error('Please contact us at  support@goloco.in', 'Something went wrong!', 2000);
          }else{
            NotificationManager.success('', 'Successfully registered', 2000);
          }
        });

      }
    }


  }

  onChange(type, e){

    let newObj = {...this.state.registerData};
    newObj[type] = e.target.value;
    newObj[type+"Valid"] = true;

    this.setState({registerData : newObj});

  }


  inviteInputOnChange(index, type, e){

    let newObj = [...this.state.inviteData];
    newObj[index-1][type] = e.target.value;
    newObj[index-1][type+"Valid"] = true;
    this.setState({inviteData : newObj});

  }


  render () {

    const {registerData, inviteData} = this.state;


    let allReferralsForm = [1,2,3,4,5].map((index, i) => {

      return (
        <InviteForm key={index} registerData={inviteData[i]} onChange={this.inviteInputOnChange} index={index}/>
      );

    });



    return (
      <div className="container">
        <NotificationContainer/>

        <Element name="home">

          <div className="home fullHeightBox relative">
            <img className="bg1" src="https://image.ibb.co/ntD8F6/bg2.jpg" alt=""/>

            <p className="home_text text_bg1">
              Goloco is attempting to create a Digital platform that connects the Pubs, bars, clubs and lounges of the world. While ours is a massive goal, we have chosen to take it one step at a time.

              We are now a “Invite only” app on Android and iOS with some limited features. On November 23rd 2017, we will host the first set of  people at 3 locations in Bangalore. Our hope is that all of them have a memorable experience and will return along with other friends for many more moments of joy together.

              The most important thing is for everyone to enjoy their association with Goloco – Our Customers, Our Barowner partners, our entertainment partners and our people.

              We request you for your patience as we develop this community one location at a time, one neighbourhood at a time, one day at a time.

              Please register to get an invite with a download link

            </p>

          </div>

        </Element>


        <Element name="concept">

          <div className="home fullHeightBox  relative">
            <img className="bg2" src="https://image.ibb.co/iKUb2m/concept.jpg" alt=""/>
            <h5>The concept</h5>

            <p className="home_text text_bg1">
              The bar and club market in the US (the largest market in the world) has a gross profit of about $15 Billion, which amounts to $129 spent by every American between the ages of 25 and 59. Why do people go to bars and clubs? The answer is togetherness. We do so in order to strengthen social contacts and feel a sense of belonging.

              Togetherness is quite different from beer, but then again, a lot of beer does go along with togetherness sales. The beer is the ritual; the pub is the stage upon which it unfolds.

              Goloco will enable Pubs and bars across the world to provide all human tribes a platform for experiencing togetherness with a dash of adventure.
            </p>

          </div>

        </Element>


        <Element name="hard_work">

          <div className="home fullHeightBox  relative">
            <img className="bg3" src="https://image.ibb.co/mBYfTR/hardfun.jpg" alt=""/>
            <h5>Hard work to Hard fun – November 23rd 2017</h5>

            <p className="home_text text_bg1">
        For the past few years, we visited capital cities across both the developed and the developing world. We partied in various locations from the swish nightclubs in Manhattan to the local bars in Dar es Salaam. We felt the need to unite people across the world trying to attain the coveted balance between work and fun, family and company, others and self. Hence, we are creating Goloco.

        We didn’t want to wait. We are inviting a select few to experience a closed group beta on November 23rd across 3 locations in Bangalore – Tilt Koramangala, Warehouse Indiranagar, Fiddler’s Green Kammanahalli.

        Register for the event and receive a link to download and install the Goloco app for Andriod or use as a Web link on iOS (Safari). You can visit one of more of the locations on the day and hopefully have a good time. We hope you will come with your friends and we hope you will be part of the Goloco journey.
            </p>

          </div>

        </Element>

        <Element name="partner">

          <div className="home relative no_overflow">

            <h5>Partners</h5>
            <img className="bg5" src="https://image.ibb.co/gTNw2m/partner.jpg" alt=""/>

            <ul className="partners">
              <li>
                <a href="http://winkl.co">Winkl – Content partner – winkl.co</a>
              </li>
              <li>
                <a href="http://trillbit.com">Trillbit – Technology partner</a>
              </li><li>
              <a href="http://1byzerolabs.com"> 1byZero – Development partner</a>
            </li>
              <li>
                <a href="https://www.facebook.com/tiltloungeblr">  Tilt – Location partner </a>
              </li>
              <li>
                <a href="https://www.facebook.com/thewarehouseblr"> Warehouse – Location partner  </a>
              </li>
              <li>
                <a href="https://www.facebook.com/FiddlersGreenRooftopRestoBar"> Fiddler’s green – Location partner </a>
              </li>

            </ul>

          </div>

        </Element>

        <Element name="contact">

          <div className="home border_bottom bg6">

            <h5>Contact us</h5>

            <p className="home_text text-center">Email: support@goloco.in</p>
            <p className="home_text text-center"><a className="home_text text-center" href=" https://www.facebook.com/thegoloco">Find us on Facebook</a></p>

          </div>

        </Element>


        <Element name="register">

          <div className="home border_bottom ">

            <h5>Register</h5>


            <div className="invite_register_form">

              <InviteForm registerData={registerData} onChange={this.onChange}/>

              <button className="submit_btn" onClick={this.register.bind(this, 0)}>Submit</button>
            </div>

            <h5>You can also refer your friends</h5>

            <div className="invite_register_form">
              {allReferralsForm}

              <button className="submit_btn" onClick={this.register.bind(this, 1)}>Submit</button>
            </div>


          </div>

        </Element>



      </div>
    );
  }

}


function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Main);
