import React, {Component} from 'react'

class DropDown extends Component{

    render() {
        return(
            <>
            <label>Choose an option:
                <select class="drop1" name="info">
                    <option value="">Select One …</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="N/A">N/A</option>
                </select>
            </label>
            <div class="result"></div>
            </>
        )
    }
}
            

export default DropDown