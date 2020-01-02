import React from "react"
import List from "common/listScroll/index"

import "./index.scss"

class ListPage extends React.Component{
    public state ={
        data:[
            { id: 1, message: "q" }, 
            { id: 2, message: "w" },
            { id: 3, message: "e" },
            { id: 4, message: "r" },
            { id: 5, message: "y" },
            { id: 6, message: "t" },
            { id: 7, message: "u" },
            { id: 8, message: "p" },
            { id: 9, message: "[i]" },
            { id: 0, message: "a" },
            { id: 10, message: "s" },
            { id: 11, message: "d" },
            { id: 12, message: "f" },
            { id: 13, message: "g" },
            { id: 14, message: "u" },
            { id: 15, message: "p" },
            { id: 16, message: "[i]" },
            { id: 17, message: "a" },
            { id: 18, message: "s" },
            { id: 19, message: "d" },
            { id: 20, message: "f" },
            { id: 21, message: "g" }
        ]
    }
    public render() {
        return (
            <div className="listpage">
                <List list={this.state.data}/>
            </div>
        )
    }
}

export default ListPage