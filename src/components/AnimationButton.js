import React from 'react';

const AnimationButton = (props) => {
  return (<button className='animation-button' onClick={props.onClick}>
    {props.children}
    </button>);
};

AnimationButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.string.isRequired
}

export default AnimationButton;