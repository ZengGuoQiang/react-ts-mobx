import React from "react"
import "pages/home/index.css"
import {observable, computed} from "mobx"

class TodoList{
    @observable firstNumber: number = 0
    @observable secondNumber: number = 0

    @computed get total(){
        return this.firstNumber + this.secondNumber
    }
}

let list = new TodoList()

class Home extends React.Component<any>{
    render(){ 
        return(
            <div>
                <div><input value={list.firstNumber}/></div>
                <div><input value={list.secondNumber}/></div>
                <div>{list.total}</div>
            </div>
        )
    }
}

export default Home