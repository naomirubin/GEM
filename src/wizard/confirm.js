import React, { Component } from "react"
import {
  Row,
  Col,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "shards-react"
import "shards-ui/dist/css/shards.min.css"
import { Link } from "gatsby"

import Layout from "../components/layout"

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.handleChange(e)
    this.props.nextStep()
  }

  back = (e) => {
    this.props.handleChange(e)
    this.props.prevStep()
  }

  render() {
    const {
      values: { q1, q2, q3, q4, q5 },
    } = this.props

    return (
      <Layout>
        <Container>
          <h4>Confirm user data</h4>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>Question 1?</ListGroupItemHeading>
              <ListGroupItemText>{q1}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Question 2?</ListGroupItemHeading>
              <ListGroupItemText>{q2}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Question 3?</ListGroupItemHeading>
              <ListGroupItemText>{q3}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Question 4?</ListGroupItemHeading>
              <ListGroupItemText>{q4}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Question 5?</ListGroupItemHeading>
              <ListGroupItemText>{q5}</ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
          <br />
          <Container>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <Button onClick={this.back}>Back</Button>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Button>
                  <Link
                    to="/dashboard"
                    style={{ color: "white" }}
                    state={this.props.values}
                  >
                    Continue
                  </Link>
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default Confirm
