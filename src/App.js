//worked with Aileen (surprise!)
import React, { Component } from 'react';
import GifList from './components/GifList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      apiData: {},
    })
     this.changeGif = this.changeGif.bind(this);
  }

  componentWillMount() {
    console.log('App will mount');
  }

  componentDidMount(){
    console.log('App did mount');
    axios('http://api.giphy.com/v1/gifs/random?tag=ballet&api_key=6a124423bdf9492db7d5d021061da4ce')
    .then(res => {
      this.setState({
        apiData: res.data.data,
      })
    })

  }

  changeGif() {
   axios('http://api.giphy.com/v1/gifs/random?tag=ballet&api_key=6a124423bdf9492db7d5d021061da4ce')
    .then(res => {
      this.setState({
        apiData: res.data.data,
      })
    })
  }

    render() {
      console.log('App rendering', this.state);
    return (
      <div className="App">
         <h1> Welcome to Ballet Giphy</h1>
         <h2>(the best giphy) </h2>
      <GifList data={this.state.apiData}
      changeGif={this.changeGif}/>
      </div>
    );
  }
}

export default App;
