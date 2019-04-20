import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
// import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
// import PostData from './Data/summitHunterData.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      summitHunterData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getSummitHunterData(){
    fetch("https://janeevans.github.io/Files/json/summitHunterData.json")
    // fetch("/summitHunterData.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            summitHunterData: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )


  }

  componentDidMount(){
    this.getSummitHunterData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.summitHunterData.main}/>
        <About data={this.state.summitHunterData.main}/>
        {/* <Resume data={this.state.resumeData.resume}/> */}
        <Portfolio data={this.state.summitHunterData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Contact data={this.state.summitHunterData.main}/>
        <Footer data={this.state.summitHunterData.main}/>
      </div>
    );
  }
}

export default App;
