import React from "react"
import "pages/about/index.css"
import { observer } from "mobx-react"
import { observable, action } from "mobx"

class autoAdd{
    @observable num= 0;

    @action add(){
        this.num++
        console.log(this)
    }
}

const number1 = new autoAdd()

const About : React.FC = () =>{
    return(
    <div>
            <button onClick={number1.add.bind(number1)}></button>
            {number1.num}
    </div>
    )
}

export default About