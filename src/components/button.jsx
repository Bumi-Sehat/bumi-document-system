import React from 'react'

class Button extends React.Component {

    render(){
        return(
            <>
            <button onClick={this.handleClick}>Button</button>
            </>
        )

    }
}

export default Button