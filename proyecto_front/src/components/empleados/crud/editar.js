import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../empleados.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationProps from "../../prompts/confirmation";

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpleado: this.props.getIdEmpleado(),
            redirect: false,
            message: {
                text: "",
                show: false,
            },
            confirmation: {
                title: "Modificar Paciente",
                text: "¿Desea Modificar el Paciente?",
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
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    componentDidMount() {
        this.getEmpleado();
    }
    getEmpleado() {
        this.setState({ loading: true });
        request
            .get(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                this.setState({
                    empleado: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
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
            .put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab("buscar");
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    onExitedMessage() {
        if (this.state.redirect) this.props.changeTab("buscar");
    }
    onCancel() {
        alert(
            this.setState({
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            })
        );
    }
    onConfirm() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
        this.guardarEmpleados();
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
                <ConfirmationProps
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading}></Loading>
                <Row>
                    <h1 className="">Editar Pacientes</h1>
                </Row>
                <Row className="">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                value={this.state.empleado.nombre}
                                onChange={(e) =>
                                    this.setValue("nombre", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control
                                value={this.state.empleado.apellido_p}
                                onChange={(e) =>
                                    this.setValue("apellido_p", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control
                                value={this.state.empleado.apellido_m}
                                onChange={(e) =>
                                    this.setValue("apellido_m", e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                value={this.state.empleado.telefono}
                                onChange={(e) =>
                                    this.setValue("telefono", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={this.state.empleado.mail}
                                onChange={(e) =>
                                    this.setValue("mail", e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                value={this.state.empleado.direccion}
                                onChange={(e) =>
                                    this.setValue("direccion", e.target.value)
                                }
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={() =>
                                this.setState({
                                    confirmation: {
                                        ...this.state.confirmation,
                                        show: true,
                                    },
                                })
                            }
                            // onClick={() => console.log(this.guardarEmpleados())}
                        >
                            Guardar/Editar Paciente
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
