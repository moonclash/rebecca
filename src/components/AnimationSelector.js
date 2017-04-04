import React from 'react';

const AnimationSelector = (props) => {
  return (<select onChange={props.onChange}>
            {props.children}
         </select>);
}


AnimationSelector.propTypes ={
  onChange: React.PropTypes.func.isRequired,
}

export default AnimationSelector;