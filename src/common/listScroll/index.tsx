import React from "react";
import { Data } from "common/listScroll/state"


import "./index.scss";

class List extends React.Component<Data>{

    public render(){
        return(
            <div className="listmask">
                <ul>
                    {
                        this.props.list.map((data)=>{
                            if (this.props.img) {
                                return (
                                <li key={data.id}>
                                    <img src={data.img} alt={data.message}/>
                                </li>
                                    )
                            } else {
                                return (<li key={data.id}>{data.message}</li>)
                            }
                        })
                    }
                </ul>
            </div>
        )
    }    
}

export default List