import React, { Component } from "react"
import { Button, Container, Row, Col } from "shards-react"
import "shards-ui/dist/css/shards.min.css"

import Layout from "../components/layout"

export class Q2 extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.handleChange(e)
    this.props.nextStep()
  }
  render() {
    const { values, handleChange } = this.props

    return (
      <Layout>
        <Container>
          {this.props.children}
          <h4>Solve for x: 2(3x) = 162.</h4>
          <Container>
            <Row>
              <Col>
                <Button
                  value="Answer 1"
                  name="q2"
                  outline
                  theme="success"
                  size="lg"
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  3
                </Button>
              </Col>
              <Col>
                <Button
                  value="Answer 2"
                  name="q2"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  4
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Button
                  value="Answer 3"
                  name="q2"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  5
                </Button>
              </Col>
              <Col>
                <Button
                  value="Answer 4"
                  name="q2"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  8
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default Q2
