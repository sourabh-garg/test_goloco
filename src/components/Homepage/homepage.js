import React from 'react';
import {connect} from 'react-redux';

import Scroll from 'react-scroll';
let Element    = Scroll.Element;
import './homepage.scss';
import InviteForm from './inviteForm';

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state={inviteData : [{nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
      {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
      {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
      {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
      {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" },
      {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" }], registerData : {nameValid: true, emailValid: true, phoneValid: true, name:"", phone:"", email:"" }};
    this.register = this.register.bind(this);
    this.onChange=this.onChange.bind(this);
    this.inviteInputOnChange = this.inviteInputOnChange.bind(this);
  }

  register(){


  }

  onChange(type, e){

    let newObj = {...this.state.registerData};
    newObj[type] = e.target.value;

    this.setState({registerData : newObj});

  }


  inviteInputOnChange(index, type, e){

    let newObj = [...this.state.inviteData];
    newObj[index-1][type] = e.target.value;
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

        <Element name="home">

          <div className="home fullHeightBox border_bottom">
            <p className="home_text">
              Goloco is attempting to create a Digital platform that connects the Pubs, bars, clubs and lounges of the world. While ours is a massive goal, we have chosen to take it one step at a time.

              We are now a “Invite only” app on Android and iOS with some limited features. On November 23rd 2017, we will host the first set of  people at 3 locations in Bangalore. Our hope is that all of them have a memorable experience and will return along with other friends for many more moments of joy together.

              The most important thing is for everyone to enjoy their association with Goloco – Our Customers, Our Barowner partners, our entertainment partners and our people.

              We request you for your patience as we develop this community one location at a time, one neighbourhood at a time, one day at a time.

              Please register to get an invite with a download link

            </p>

          </div>

        </Element>


        <Element name="concept">

          <div className="home fullHeightBox border_bottom">

            <h5>The concept</h5>

            <p className="home_text">
              The bar and club market in the US (the largest market in the world) has a gross profit of about $15 Billion, which amounts to $129 spent by every American between the ages of 25 and 59. Why do people go to bars and clubs? The answer is togetherness. We do so in order to strengthen social contacts and feel a sense of belonging.

              Togetherness is quite different from beer, but then again, a lot of beer does go along with togetherness sales. The beer is the ritual; the pub is the stage upon which it unfolds.

              Goloco will enable Pubs and bars across the world to provide all human tribes a platform for experiencing togetherness with a dash of adventure.
            </p>

          </div>

        </Element>


        <Element name="hard_work">

          <div className="home fullHeightBox border_bottom">
            <h5>Hard work to Hard fun – November 23rd 2017</h5>

            <p className="home_text">
        For the past few years, we visited capital cities across both the developed and the developing world. We partied in various locations from the swish nightclubs in Manhattan to the local bars in Dar es Salaam. We felt the need to unite people across the world trying to attain the coveted balance between work and fun, family and company, others and self. Hence, we are creating Goloco.

        We didn’t want to wait. We are inviting a select few to experience a closed group beta on November 23rd across 3 locations in Bangalore – Tilt Koramangala, Warehouse Indiranagar, Fiddler’s Green Kammanahalli.

        Register for the event and receive a link to download and install the Goloco app for Andriod or use as a Web link on iOS (Safari). You can visit one of more of the locations on the day and hopefully have a good time. We hope you will come with your friends and we hope you will be part of the Goloco journey.
            </p>

          </div>

        </Element>

        <Element name="partner">

          <div className="home border_bottom">

            <h5>Partners</h5>

            <ul className="partners">
              <li>
                Winkl – Content partner – winkl.co
              </li>
              <li>
                Trillbit – Technology partner – trillbit.com
              </li><li>
              1byZero – Development partner – 1byzerolabs.com
            </li>
              <li>
                Tilt – Location partner – Link to Tilt Facebook page
              </li>
              <li>
                Warehouse – Location partner – Link to Warehouse Facebook page
              </li>
              <li>
                Warehouse – Location partner – Link to Warehouse Facebook page
              </li>
              <li>
                Fiddler’s green – Location partner – Link to Fiddler’s green Facebook page
              </li>

            </ul>

          </div>

        </Element>

        <Element name="contact">

          <div className="home border_bottom">

            <h5>Contact us</h5>

            <p className="home_text text-center">Email: support@goloco.in</p>

          </div>

        </Element>


        <Element name="register">

          <div className="home border_bottom">

            <h5>Register</h5>


            <div className="invite_register_form">

              <InviteForm registerData={registerData} onChange={this.onChange}/>

              <button className="submit_btn">Submit</button>
            </div>

            <h5>You can also refer your friends</h5>

            <div className="invite_register_form">
              {allReferralsForm}

              <button className="submit_btn">Submit</button>
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
