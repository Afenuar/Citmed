import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../empleados.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message: {
                text: "",
                show: false,
            },
            loading: false,
            empleado: {
                nombre: "",
                apellido_p: "",
                apellido_m: "",
                telefono: "",
                mail: "",
                direccion: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);

    }
    setValue(inicio, value) {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [inicio]: value,
            },
        });
    }
    guardarEmpleados() {
        this.setState({ loading: true });
        request
            .post("/empleados", this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    onExitedMessage () {
        if (this.state.rediret) this.props.changeTab( 'buscar' );
      }
    
    render() {
        return (
            <Container id="empleados-crear-contanier">
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />
                <Loading show={this.state.loading}></Loading>
                <Row>
                    <h1 className="">Crear Pacientes</h1>
                </Row>
                <Row className="">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    this.setValue("nombre", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    this.setValue("apellido_p", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    this.setValue("apellido_m", e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    this.setValue("telefono", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    this.setValue("mail", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    this.setValue("direccion", e.target.value)
                                }
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={() => console.log(this.guardarEmpleados())}
                        >
                            Guardar Paciente
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
