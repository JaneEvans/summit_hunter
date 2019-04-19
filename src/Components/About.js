import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var occupation = this.props.data.occupation;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Summit Hunter Logo" />
         </div>
         <div className="nine columns main-col">
            <h2>About Us</h2>
            <p>
               <span>{bio}</span><br/>
               We are a {city} based {occupation} built around passion for the outdoors.<br/>
               Our goal is to share adventures and skills, encourage people who has passion and love for our fantastic nature and create volunteers who want to give back. <br/>
               On behalf of John Muir's dream, "as long as I live, I'll hear waterfalls and birds sing. I'll interpret the rocks, learn the language of flood, storm, and avalanche. I'll acquaint myself with the glaciers and wild gardens, and get as near the heart of the world as I can." <br/>
               We hope everyone in our community will have great joy and spread their love and passion to encourage others.               
               
            </p>
         </div>
      </div>


   </section>
    );
  }
}

export default About;
