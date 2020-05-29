import React from "react"
import "pages/home/index.scss"
import {observable, action} from "mobx"
import {observer} from "mobx-react"
import {InputGroup,FormControl,Container,Row,Col,ButtonGroup,Button} from "react-bootstrap"

class TodoList{
    @observable firstNumber = 0
    @observable secondNumber = 0

    @action total(){
        return this.firstNumber + this.secondNumber
    }
}

let list = new TodoList()


@observer
class Home extends React.Component<any>{
    render(){ 
        return(
            <div className="loginForm">
                <Container>
                    <Row>
                        <Col>
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="Username">用户名</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Username"
                                    aria-describedby="Username"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup size="lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="Password">密码</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Password"
                                    aria-describedby="Password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Button variant="primary" size="lg" block>
                            Submit
                        </Button>
                    </Row>
                </Container>
                <div><input value={list.firstNumber} onChange={list.total.bind(list)}/></div>
                <div><input value={list.secondNumber} onChange={list.total.bind(list)}/></div>
                <div>{list.total}</div>
            </div>
        )
    }
}

export default Home