import React from 'react';


class Main extends React.Component{

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(type,e){
    const {onChange, index} = this.props;

    if(index){
      onChange(index, type, e);

    }else{
      onChange(type, e);
    }




  }

  render () {

    const {registerData} = this.props;



    return (


            <div className="invite_flex_box">

              <div className="relative form_control">

                <input onChange={this.onChange.bind(this,"name")} type="text" placeholder="Enter your name &#42;" className="name" value={registerData.name}/>
                {registerData.nameValid ?"" : <p className="validation">Please enter a name</p> }

              </div>

              <div className="relative form_control">

                <input onChange={this.onChange.bind(this,"email")} type="email" placeholder="Enter your email id" className="emailId" value={registerData.email}/>
                {registerData.emailValid ?"" : <p  className="validation">Please enter valid email</p> }

              </div>

              <p className="text-center orText"> -- Or --</p>

              <div className="relative form_control">

                <input onChange={this.onChange.bind(this,"phone")}  type="number" placeholder="Enter your phone number" className="phoneno" value={registerData.phone}/>
                <span className="countryCode">+91 </span>
                {registerData.phoneValid ?"" : <p className="validation">Please enter valid phone no</p>  }

              </div>

            </div>


    );
  }

}



export default Main;
