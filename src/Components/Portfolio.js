import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){

        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title} rel="noopener noreferrer"  target="_blank">
               <img alt={projects.title} src={projects.image} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">
          <div className="twelve columns collapsed">

              <h1>Check Out Our Featured Outdoor Articles.</h1>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {projects}
              </div>
              <hr></hr>
              <h2>To be continued...</h2>
            </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
