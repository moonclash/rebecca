import React from 'react';

class AnimationSelector extends React.Component {
  render() {
    return (<select onChange={this.props.onChange}>
            {this.props.children}
         </select>);
  }
}
  



AnimationSelector.propTypes ={
  onChange: React.PropTypes.func.isRequired,
}

export default AnimationSelector;