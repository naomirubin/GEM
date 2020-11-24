import React, { Component } from "react"
import { Button, Container, Row, Col } from "shards-react"
import "shards-ui/dist/css/shards.min.css"

import Layout from "../components/layout"

export class Q4 extends Component {
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
          <h4>Evaluate (2/7) * (5/9) + (5/7) * (5/9). </h4>
          <Container>
            <Row>
              <Col>
                <Button
                  value="Answer 1"
                  name="q4"
                  outline
                  theme="success"
                  size="lg"
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  8/63
                </Button>
              </Col>
              <Col>
                <Button
                  value="Answer 2"
                  name="q4"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  11/18
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Button
                  value="Answer 3"
                  name="q4"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  5/9
                </Button>
              </Col>
              <Col>
                <Button
                  value="Answer 4"
                  name="q4"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  17/9
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default Q4
