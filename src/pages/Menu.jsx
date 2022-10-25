import React, { Component } from "react";

import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row className="d-flex justify-content-center">
        <Col sm="4">
          <Card body className="h-100">
            <CardTitle className="h4">Trail Test A</CardTitle>
            <CardText>
              La parte A del TMT consiste en 25 círculos en una hoja de papel
              con los números del 1 al 25 escritos al azar en cada uno. En la
              parte A, la persona tiene que dibujar una línea de un círculo al
              siguiente en orden numérico ascendente, del 1 al 25, lo más
              rápidamente posible. Las líneas entre los círculos se denominan
              "camino".
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
                  Instrucciones
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="4">
          <Card body className="h-100">
            <CardTitle className="h4">Trail Test B</CardTitle>
            <CardText className="text-justified">
              La parte B del TMT consiste en 24 círculos en una hoja de papel,
              pero, en lugar de que todos los círculos contengan números, la
              mitad contiene los números del 1 al 12 y la otra mitad las letras
              de la A a la L. En la parte B, la persona debe conectar los
              círculos en orden ascendente, alternando entre números y letras.
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
                  Instrucciones
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
