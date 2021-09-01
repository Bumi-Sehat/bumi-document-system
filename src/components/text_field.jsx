import React, {Component} from 'react'

class TextField extends Component {

    render() {
        return(
            <>
            <input placeholder="Enter some text" name="name"></input>
            <p id="log"></p>
            </>
        )
    }
}

export default TextField