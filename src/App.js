import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Tile from './Tile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="mainImg">
          <img src="http://lorempixel.com/400/200/" alt="mainImg" />
          <div className="mainImgText">Some Text Over Image</div>
        </div>
        <div className="tileContainer">
          <Tile title="Some Text" img="http://lorempixel.com/400/200/" />
          <Tile title="Some Text" img="http://lorempixel.com/400/200/" />
          <Tile title="Some Text" img="http://lorempixel.com/400/200/" />
        </div>
        <div className="contentContainer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi, incidunt 
            quae optio, accusamus, perferendis ducimus a fugiat molestias laboriosam provident odio 
            architecto officia quos nesciunt. Eveniet nesciunt doloremque facilis.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi, incidunt 
            quae optio, accusamus, perferendis ducimus a fugiat molestias laboriosam provident odio 
            architecto officia quos nesciunt. Eveniet nesciunt doloremque facilis.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi, incidunt 
            quae optio, accusamus, perferendis ducimus a fugiat molestias laboriosam provident odio 
            architecto officia quos nesciunt. Eveniet nesciunt doloremque facilis.
          </p>          
        </div>
        <footer className="footer">
          <div className="footerText">Legal Stuff</div>
          <div className="footerText">Careers</div>
          <div className="footerText">&copy; 2017</div>
        </footer>
        {this.props.children}
      </div>
    );
  }
}

export default App;
