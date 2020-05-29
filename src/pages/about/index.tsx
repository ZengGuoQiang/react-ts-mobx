import React ,{Component}from "react"
import "pages/about/index.css"
import { observable, action } from "mobx"
import {observer} from "mobx-react"

// class autoAdd{
//     @observable num= 0;

//     @action add(){
//         this.num++
//         console.log(this)
//         console.log(this.num)
//     }
// }

// const number1 = new autoAdd()

// const About : React.FC = () =>{
//     return(
//     <div>
//             <button onClick={number1.add.bind(number1)}></button>
//             {number1.num}
//     </div>
//     )
// }
class States {

    @observable timer =0;
    @observable secend = 0;

    @action
    add = () => {
        this.secend++
    }
}
var states = new States()

@observer
export default class About extends Component{
    componentDidMount(){
        states.timer = window.setInterval(() => { states.add() }, 1000)
    }

    componentWillUnmount() {
        clearInterval(states.timer);
    }
    render() {
        return (
            <div>
                {states.secend}
            </div>
        )
    }
}