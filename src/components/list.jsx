import React, {Component} from 'react'
import Item from './item.jsx'

class List extends Component{

    state = {
        name: "Patient Name",
        list: [{title: "First thing"}, {title: "Second thing"}]
    }

    

    render(){

        const itemList = this.state.list.map(item => {
            return <Item title={item.title}/>
        })

        return(
          
            <div>
                <h2>{this.state.name}</h2>
                {itemList}
            </div>
        )
    }
}



export default List