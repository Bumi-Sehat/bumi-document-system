import React, {Component} from 'react';
import Navbar from '../components/navbar.jsx';
import TextField from '../components/textField.jsx';
import Button from '../components/button.jsx';

class NewDocument extends Component{

  state = {
    on: true
  }

  handleClick = (e) => {
    const checked = this.state.on
    this.setState({
        on: !checked
    })
  } 
  render(){
    return (
      <div>
        <Navbar />
        <div>
          <br />
          <TextField />
          <Button />
        </div>
      </div>
    )
  }
}

export default NewDocument
