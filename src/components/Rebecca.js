import React from 'react';
import  classes  from '../classes';
import Demo from './Demo';
import AnimationSelector from './AnimationSelector';
import AnimationButton from './AnimationButton';

class Rebecca extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: classes,
      activeClass: 'rb-pulse'
    }
  }

  render() {
    return (
      <div>
         <Demo className={this.state.activeClass} name='Rebecca' desc='Smooth out-of-the-box animations'/>
            <AnimationSelector onChange={() => console.log('foo')}>
              {this.state.classes.map((option, i, arr) => 
                    {return <option key={i} value={option}>{option}</option>})}
               </AnimationSelector>
               <AnimationButton onClick={() => console.log('foo')}>Animate</AnimationButton>
            </div>) 
  }
}

export default Rebecca;