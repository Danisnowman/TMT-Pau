import React, { Component } from "react";

import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row className='d-flex justify-content-center'>
        <Col sm="4">
          <Card body className="h-100" >
            <CardTitle className="h4">Trail Test A</CardTitle>
            <CardText>
              The Trail Making Test is a neuropsychological test of visual
              attention and task switching. It consists of two parts in which
              the subject is instructed to connect a set of numbered dots as
              quickly as possible while still maintaining accuracy.
            </CardText>
            <Row className="mt-auto">
              <Col>
                <Button
                  color="primary"
                  block
                  onClick={() => this.props.selectTest("trailA")}
                >
                  Play
                </Button>
              </Col>
              <Col>
                <Button color="secondary" block>
                  Instructions
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="4">
          <Card body className="h-100" >
            <CardTitle className="h4">Trail Test B</CardTitle>
            <CardText>
              The Trail Making Test is a neuropsychological test of visual
              attention and task switching. It consists of two parts in which
              the subject is instructed to connect a set of numbered dots as
              quickly as possible while still maintaining accuracy.
            </CardText>
            <Row className="mt-auto">
              <Col>
                <Button
                  color="primary"
                  block
                  onClick={() => this.props.selectTest("trailB")}
                >
                  Play
                </Button>
              </Col>
              <Col>
                <Button color="secondary" block>
                  Instructions
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Menu;
