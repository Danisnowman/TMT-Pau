import React, { Component } from "react";

import { Table, Button, Spinner } from "reactstrap";

import { CSVLink } from "react-csv";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: {
        trails: "Trails Results",
      },
      headers: {
        trails: [
          { label: "Event", key: "event" },
          { label: "Token", key: "token" },
          { label: "Selected Token", key: "selected" },
          { label: "Outcome", key: "outcome" },
          { label: "Time elapsed", key: "elapsed" },
          { label: "Reaction time", key: "reaction" },
          { label: "Carnet", key: "userId" },
          { label: "Posturno", key: "posturno" },
        ],
      },
      data: null,
    };
  }

  componentDidMount() {
    if (this.props.results.type === "trails") {
      this.trailsEvents(this.props.results.data);
    }
  }

  componentWillUnmount() {
    this.setState({ data: null });
  }

  trailsEvents = (results) => {
    const { events, start } = results;
    let lastTs = start;

    const data = events.map((event, index) => {
      let obj = {
        event: index + 1,
        token: event.correctToken.text,
        selected: event.selectedToken.text,
        outcome: event.type,
        elapsed: (event.stamp - start) / 1000,
        reaction: (event.stamp - lastTs) / 1000,
        userId: this.props.userId,
        posturno: this.props.posturno, 
      };
      lastTs = event.stamp;

      return obj;
    });

    this.setState({ data });
  };


  render() {
    //const {date } = this.state;
    const date = new Date();
    return (
      <div>
        <h3 className="mb-3">
          {this.props.results
            ? this.state.titles[this.props.results.type]
            : "Results"}
        </h3>
        <Table>
          <thead>
            <tr>
              {this.state.headers[this.props.results.type].map((header) => {
                return <th key={header.key}>{header.label}</th>;
              })}
            </tr>
          </thead>
          {this.state.data ? (
            <tbody>
              {this.state.data.map((event) => {
                return (
                  <tr key={event.event}>
                    {Object.values(event).map((val, index) => {
                      if (index === 0) {
                        return (
                          <th scope="row" key={index}>
                            {String(val)}
                          </th>
                        );
                      } else {
                        return <td key={index}>{String(val)}</td>;
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          ) : null}
        </Table>
        <p className="text-monospace mt-3 text-muted">
          Por favor recuerda descargar el archivo con el botón de abajo y mandárselo Paulina Reyes.
        </p>
        <div className="mb-2">
          {this.state.data ? (
            <CSVLink
              data={this.state.data}
              headers={this.state.headers[this.props.results.type]}
              filename={`${
                this.props.userId
              }_${date.getFullYear()}-${date.getMonth()}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.csv`}
              className="btn btn-primary btn-lg"
              target="_blank"
            >
              Descargar CSV
            </CSVLink>
          ) : (
            <Spinner />
          )}
        </div>

        <Button onClick={this.props.goBack} color="secondary" className="mb-3">
          Regresar
        </Button>
      </div>
    );
  }
}

export default Results;
