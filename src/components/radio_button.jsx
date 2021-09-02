import React, {Component} from 'react'

class RadioButton extends Component {

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
        return(
            <>
                <p>Select an option:</p>
                <div>
                    <input type="radio" id="id1" name="one" value="name" onClick={this.handleClick} checked={this.state.on ? true : false}></input>
                    
                    <label for="id1">Name</label>
                </div>
            </>

            )
        }

}

export default RadioButton
