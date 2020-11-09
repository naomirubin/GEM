import React, { Component } from "react"
import { Button, Container, Row, Col } from "shards-react"
import "shards-ui/dist/css/shards.min.css"

import Layout from "../components/layout"

export class Q5 extends Component {
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
          <h4>Are you...?</h4>
          <Container>
            <Row>
              <Col>
                <Button
                  value="Answer 1"
                  name="q5"
                  outline
                  theme="success"
                  size="lg"
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  Answer 1
                </Button>
              </Col>
              <Col>
                <Button
                  value="Answer 2"
                  name="q5"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  Answer 2
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Button
                  value="Answer 3"
                  name="q5"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  Answer 3
                </Button>
              </Col>
              <Col>
                <Button
                  value="Answer 4"
                  name="q5"
                  outline
                  theme="success"
                  size="lg"
                  onChange={handleChange}
                  defaultValue={values.time}
                  onClick={this.continue}
                >
                  Answer 4
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default Q5
