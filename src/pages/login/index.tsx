import React from "react"
import "pages/home/index.scss"
import { observer } from "mobx-react"
import { Form, FormControl, FormGroup, Col, Button } from "react-bootstrap"

@observer
class LoginPage extends React.Component<any>{
    render() {
        return (
            <Form className="loginForm">
                <FormGroup controlId="username">
                    <Col sm={2}>
                        用户名
                    </Col>
                    <Col sm={10}>
                        <FormControl placeholder="UserName" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="password">
                    <Col sm={2}>
                        密码
                    </Col>
                    <Col sm={10}>
                        <FormControl placeholder="password" type="password" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="submit">
                    <Col sm={10}>
                        <Button type="submit" >
                            登录
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default LoginPage