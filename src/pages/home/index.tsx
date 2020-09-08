import React, { Component } from "react"
import "pages/home/index.scss"
import logoImage from "static/image/logo_base.png"
import { Container,Row,Col } from "react-bootstrap"
import menuList from "pages/home/menu_list.json"
import { observable, action } from "mobx"
import { observer } from "mobx-react"

interface menuParent{
    name:string,
    id:string,
    url:string,
    children: Array<any>,
    icon:string
}

declare enum menuChild {
    name,
    id,
    url,
    icon,
    children
}
interface Props{
    display:boolean
}

const menu: Array<menuParent> = menuList

const containerHeight = (props?:Props) :React.CSSProperties => ({
    height:window.innerHeight - 110 + "px"
})

const thridHeight = (len:number): React.CSSProperties => ({
    height:(len+1)*40+"px"
})

class renderMenu{
    @observable menuId = "GRZX";

    @action setMenuid(id:string){
        this.menuId = id
    }
}

const setMenu = new renderMenu()

@observer
export default class Home extends Component {
    render(){
        return <>
            <Row className="logo_row">
                <Col className="fl">
                    <img src={logoImage} alt=""/>
                </Col>
                <Col className="fr user_box">
                    <span className="wel_name">欢迎您，XX</span>
                    <div className="user_ul">
                        <div><i className="iconfont icon-zhongyingwenqiehuan"></i></div>
                        <div><i className="iconfont icon-shouye"></i></div>
                        <div><i className="iconfont icon-yanse"></i></div>
                        <div><i className="iconfont icon-youjian1"></i></div>
                        <div><i className="iconfont icon-xiaoxi"></i></div>
                        <div><i className="iconfont icon-tuichu-copy"></i></div>
                    </div>
                </Col>
            </Row>
            <Row className="title_row">
                <Col xs={2} md={2} className="title_top_white"></Col>
                <Col xs={9} md={9} className="top_menu_box">
                    <div className="top_menu">
                        {menu.map((title) => {
                            return (<div className="menuBox"><div key={title.id} className={title.id === setMenu.menuId ? "active" : ""} onClick={setMenu.setMenuid.bind(setMenu,title.id)}><i className={title.icon}></i><span>{title.name}</span></div></div>)
                        })}
                    </div>
                </Col>
                <Col xs={1} md={1} className="title_top_white"></Col>
            </Row>
            <Row className="container_row" style={containerHeight()}>
                <Col className="container_menu" xs={2} md={2}>
                    {
                        menu.map((title:{id:string,children:Array<any>,name:string,icon:string,url:string}) => {
                            if (title.id === setMenu.menuId) {
                                return title.children.map((twiceChild) => {
                                    if (twiceChild.children) {
                                        return (<div key={twiceChild.id} style={thridHeight(twiceChild.children.length)}><i className={twiceChild.icon}></i><span>{twiceChild.name}</span>
                                            <ul>
                                                {
                                                    twiceChild.children.map((thridTitle: { id: string; icon: string; name: string; url: string }) => {
                                                        return (<li><div key={thridTitle.id}><i className={thridTitle.icon}></i><span>{thridTitle.name}</span></div></li>)
                                                    })
                                                }
                                            </ul>
                                        </div>)
                                    } else {
                                        return (<div key={twiceChild.id}><i className={twiceChild.icon}></i><span>{twiceChild.name}</span></div>)
                                    }
                                })
                            }
                        })
                    }
                </Col>
                <Col xs={10} md={10}>

                </Col>
            </Row>
        </>
    }
}