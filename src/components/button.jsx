import React, {Component} from 'react'

class Button extends Component {

    state = {
        submit: false
    }

    handleClick = (e) => {
        const clicked = this.state.submit
        this.setState({
            submit: !clicked
        })
    }

    render(){
        return(
            <>
            <button onClick={this.handleClick}>{this.state.submit ? "Saved" : "Save?"}</button>
            </>
        )

    }
}

export default Button
