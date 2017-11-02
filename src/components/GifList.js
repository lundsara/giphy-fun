import React, {Component} from 'react';
import Gif from './Gif';

class GifList extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('GL will receive props');
  }

componentWillMount() {
  console.log('GL will mount');
  return false;
}

componentWillUpdate() {
  console.log('Gl will update');
}

componentDidUpdate(){
  console.log('GL did update');
}
render() {
  console.log('Gif rendering');

    return (
      <div>
        <button onClick={this.props.changeGif} > Get more ballet!</button>
        <Gif data={this.props.data}/>

      </div>
    )
  }
}

export default GifList;
