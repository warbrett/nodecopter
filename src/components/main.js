'use strict';

const rest = require('rest');
const React = require('react');

class Main extends React.Component {
  constructor(...args){
    super(...args);

    this.state = {
      connected: false
    };
    this.isConnected = this.isConnected.bind(this);
  }
  componentDidMount(){
    this.setState({
      connected: true
    });

    window.addEventListener('keydown', function(keypress){
      return rest('http://localhost:3000/' + keypress.keyCode);
    });
  }
  isConnected(){
    const { connected } = this.state;
    if(connected){
      return ( <div> Connected! </div>);
    }

    return ( <div> Awaiting drone connection...</div> );
  }
  render(){
    return (
      <div>
        {this.isConnected()}
        Lets Drone! Use WASD and your arrow keys!
      </div>
    );
  }
}

module.exports = Main;
