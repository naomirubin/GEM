import React, { Component } from "react"
import { Button, Container, Row, Col } from "shards-react"
import "shards-ui/dist/css/shards.min.css"

import Layout from "../components/layout"

export class Q1 extends Component {
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
          <h4>
            The length of a rectangular playing field is three times the width.
            If the perimeter of the playing field is 96 m, what is the area of
            the field in square meters?
          </h4>
          <Container>
            <Row>
              <Col>
                <Button
                  value="Answer 1"
                  name="q1"
                  outline
                  theme="success"
                  size="lg"
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  432
                </Button>
              </Col>
              <Col>
                <Button
                  value="Answer 2"
                  name="q1"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  450
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Button
                  value="Answer 3"
                  name="q1"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  464
                </Button>
              </Col>
              <Col>
                <Button
                  value="Answer 4"
                  name="q1"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  504
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default Q1
