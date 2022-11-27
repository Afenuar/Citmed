import React from "react";
import { Container, Modal } from "react-bootstrap";
import "./prompt.css";
import { isUndefined, isNull } from "util";

export default class MessagePrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show) this.setState({ show: true }, this.hideMessage());
    }
    hideMessage() {
        setTimeout(() => {
            this.setState({ show: false });
        }, this.props.duration);
    }
    onExited() {
        if(!isUndefined (this.props.onExited) && !isNull(this.props.onExited))
        this.props.onExited();
    }
    
    render() {
        return (
            <Container>
                <Modal
                    id="message-prompt"
                    centered
                    show={this.state.show}
                    onExited={() => this.onExited()}
                >
                    <Modal.Body>{this.props.text}</Modal.Body>
                </Modal>
            </Container>
        );
    }
}
