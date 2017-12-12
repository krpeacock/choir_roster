import React, {Component} from 'react';
import './Singer.css';

class Singer extends Component {
  render(){
    let { singer } = this.props;

    return (
      <div className="singer">
        <img src={singer.photo} />
        <p>{singer.name}</p>
      </div>
    )
  }
}

export default Singer