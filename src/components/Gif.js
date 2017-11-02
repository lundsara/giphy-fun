import React, {Component} from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {

    console.log('Gif should update');
    return nextProps.data.image_original_url !== this.props.data.image_original_url;
  }

render() {
  console.log('Gif rendering');
  return(
    <div>
     <img src={this.props.data.image_original_url}/>
    </div>
   )
 }
}




export default Gif;
