import React from "react";

import Menu from "./pages/Menu";
import Results from "./pages/Results";

import TrailTest from "./tests/TrailTest";

import "./App.css";
import { Container, Card, CardBody, Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectedPage: "hello",
      isLoading: false,
      countdown: null,
      results: null,
      userId: null,
      value: "",
      posturno: false,
    };
  }

  sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  countdown = async () => {
    this.setState({ isLoading: true, countdown: 3 });
    await this.sleep(1000);
    this.setState({ countdown: 2 });
    await this.sleep(1000);
    this.setState({ countdown: 1 });
    await this.sleep(1000);
    this.setState({ isLoading: false, countdown: 0 });
  };

  selectTest = (test) => {
    this.countdown();
    this.setState({ selectedPage: test });
  };

  goBack = () => {
    this.setState({ selectedPage: "menu", results: null });
  };

  goToPage = (page) => {
    this.setState({ selectedPage: page });
  };

  handleResults = (results) => {
    this.setState(results);
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.setUserId(this.state.value);
    console.info("UserID was submitted: " + this.state.value);
    console.info("Posturno was submitted: " + this.state.posturno);
    this.goToPage("menu");
  }

  setUserId = (userId) => {
    this.setState({ userId: userId });
  };

  componentDidMount() {
    //this.countdown();
  }

  render() {
    const { isLoading, countdown, selectedPage, results, userId, posturno } = this.state;

    if (isLoading) {
      return (
        <div className="loading">
          <div className="loading-centre">
            <h1 className="display-1 text-center">{countdown}</h1>
          </div>
        </div>
      );
    }

    return (
      <Container className="text-center">
        <div className="mb-5">
          <h1 className="display-3">TMT Pau</h1>
        </div>

        {results ? (
          <Button
            userId={userId}
            size="lg"
            color="primary"
            className="mb-3"
            onClick={() => this.goToPage("results")}
          >
            Ver Resultados
          </Button>
        ) : null}
        {selectedPage === "hello" ?
          (
            <Container className="text-left">
              <p className=" mt-3 text-muted">
                El Trail Making Test es una prueba neuropsicológica de atención visual atención visual y cambio de tareas. Consta de dos partes en las que el sujeto tiene que conectar un conjunto de puntos numerados lo más rápido posible sin perder la precisión.
              </p>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label for="studentId" sm={2}>Carnet Estudiantil: </Label>
                    <Col sm={10}>
                      <Input
                        value={this.state.value}
                        onChange={this.handleChange}
                        type="number"
                        name="carnet"
                        id="studentId"
                        placeholder="20170089" />
                    </Col>
                  </FormGroup> <FormGroup row>
                    <Label for="posturno" sm={2}>¿Estás posturno?</Label>
                    <Col sm={{ size: 10 }}>
                      <FormGroup check>
                        <Label check>
                          <Input
                            // value={this.state.posturno}
                            onChange={(e) => this.setState({ posturno: e.target.checked })}
                            type="checkbox"
                            id="posturno" />{' '}
                          Sí estoy posturno.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button>Enviar</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Container>

          )
          // <Hello goToPage={this.goToPage} setUserId={this.setUserId} />
          : selectedPage === "menu" ? (
            <Menu selectTest={this.selectTest} />
          ) : (
            <Card
              className={`test-card mx-auto ${selectedPage === "results" ? "border-0" : null
                }`}
            >
              <CardBody>
                {selectedPage === "trailA" ? (
                  <TrailTest part="A12" handleResults={this.handleResults} />
                ) : null}
                {selectedPage === "trailB" ? (
                  <TrailTest part="B" handleResults={this.handleResults} />
                ) : null}
                {selectedPage === "results" ? (
                  <Results results={results} goBack={this.goBack} userId={userId} posturno={posturno} />
                ) : null}
              </CardBody>
            </Card>
          )}
        {selectedPage === "menu" ? (
          <p className="text-monospace text-center mt-3 text-muted">v0.0.1</p>
        ) : null}
      </Container>
    );
  }
}

export default App;
