import React from 'react';

const Demo = (props) => {
  return (
      <div className={props.className}> 
        <h1>{props.name}</h1>
        <h2>{props.desc}</h2>
      </div>
    );
};

Demo.propTypes = {
  name: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired
}

export default Demo;