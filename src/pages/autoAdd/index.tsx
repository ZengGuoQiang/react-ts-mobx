import React, { Component } from "react"
import "pages/about/index.css"
import { observable, action } from "mobx"
import { observer } from "mobx-react"

class autoAdd{
    @observable num= 0;

    @action add(){
        this.num++
        console.log(this)
        console.log(this.num)
    }
}

const number1 = new autoAdd()


@observer
export default class AutoAdd extends Component {

    render() {
        return(
        <div>
                <button onClick={number1.add.bind(number1)}></button>
                {number1.num}
        </div>
        )
    }
}