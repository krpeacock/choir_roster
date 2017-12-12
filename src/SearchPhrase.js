import React, {Component} from 'react';

class SearchPhrase extends Component {
  render(){
    let { voicepart, currentOrAll } = this.props;
    return (
      <form id="search-phrase">
        <h2>Show me&nbsp;
          <select name="voicepart" value={voicepart} onChange={this.props.handleChange}>
            <option value="all">singers</option>
            <option value="soprano">sopranos</option>
            <option value="alto">altos</option>
            <option value="tenor">tenors</option>
            <option value="bass">bases</option>
          </select>
          &nbsp;who
          <select name="currentOrAll" value={currentOrAll} onChange={this.props.handleChange}>
            <option value="current">are currently singing</option>
            <option value="all">have ever sung with the choir</option>
          </select>
        </h2>
      </form>
    )
  }
}

export default SearchPhrase;