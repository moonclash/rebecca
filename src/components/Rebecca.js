import React from 'react';
import  classes  from '../classes';
import Demo from './Demo';
import AnimationButton from './AnimationButton';

class Rebecca extends React.Component {
  constructor() {
    super();
    this.updateSelectedClass = this.updateSelectedClass.bind(this);
    this.updateActiveClass = this.updateActiveClass.bind(this);
    this.state = {
      classes: classes,
      selectedClass: '',
      activeClass: 'rb-appearFromLeft'
    }
  }

  updateSelectedClass() {
    const selectedClass = this.classInput.value;
    this.setState({
      selectedClass
    })
  }

  updateActiveClass() {
    const {selectedClass} = this.state;
    this.setState({
      activeClass: selectedClass
    })
  }

  render() {
    return (
      <div className='rebecca-wrap'>
         <Demo className={this.state.activeClass} name='Rebecca' desc='Smooth out-of-the-box animations'/>
            <select onChange={this.updateSelectedClass} ref={(input) => this.classInput = input} >
              {this.state.classes.map((option, i, arr) => 
                    {return <option key={i} value={option}>{option}</option>})}
               </select>
               <AnimationButton onClick={this.updateActiveClass}>Animate</AnimationButton>
            </div>) 
  }
}

export default Rebecca;