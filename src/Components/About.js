import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Summit Hunter Logo" />
         </div>
         <div className="nine columns main-col">
            <h2>About Us</h2>
            <p>We are a {city} based <span>{occupation}</span> to promote outdoor spirits. {description}</p>
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Us</h2>
                  <p className="address">
                     <span>{city}, {state}</span><br />
                     <span>{email}</span>
                  </p>
               </div>
            </div>
         </div>
      </div>


   </section>
    );
  }
}

export default About;
