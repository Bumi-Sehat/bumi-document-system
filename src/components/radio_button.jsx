import React, {Component} from 'react'

class RadioButton extends Component {

    render(){
        return(
            <>
                <p>Select an option:</p>
                <div>
                    <input type="radio" id="id1" name="one" value="name" checked=""></input>
                    
                    <label for="id1">Name</label>
                </div>

                <div>
                    <input type="radio" id="id2" name="two" value="name" checked=""></input>
                    <label for="id2">Name</label>
                </div>
            </>

            )
        }

}

export default RadioButton