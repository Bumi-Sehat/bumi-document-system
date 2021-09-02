import React, {Component} from 'react'

class Button extends Component {



    render(){
        return(
            <>
            <button onClick={this.handleClick}>Button</button>
            </>
        )

    }
}

export default Button
