import React, { Component } from 'react';
import {
    Button,
    Collapse,
    Jumbotron,
    Form,
    Row,
    Col
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions'

class PromoCodeDiscount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)  {
        this.props.handleChange(e);
    };

    render() {
        return(
            <div>
                <Button
                    className="promo-code-button"
                    variant="link"
                    onClick={() => this.setState({open: !this.state.open})}
                >
                    {this.state.open === false ? `Apply` : `Hide`}
                    promo code
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Jumbotron>
                            <Row className="show-grid">
                                <Col md={12}>
                                    <Form>
                                        <Form.Group controlId="formInlineName">
                                            <Form.Label>Promo Code</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter promo code"
                                                value={this.props.promoCode}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                        <Button
                                            block
                                            variant="success"
                                            className="btn-round"
                                            disabled={this.props.isDisabled}
                                            onClick={this.props.giveDiscount}
                                        >
                                            Apply
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </div>
                </Collapse>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(PromoCodeDiscount);