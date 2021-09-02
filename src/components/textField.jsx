import React, {Component} from 'react'

class TextField extends Component {

    state = {
        text: ""
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.text
        })
    }

    render() {
        return(
            <>
            <input text="Enter some text" name="name" onChange={this.handleChange}></input>
            <p id="log"></p>
            </>
        )
    }
}

export default TextField
