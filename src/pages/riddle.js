import { Link } from "gatsby"
import Layout from "../components/layout"
import React, { Component } from "react"
import Dots from "../wizard/dots"
import Q1 from "../wizard/q1"
import Q2 from "../wizard/q2"
import Q3 from "../wizard/q3"
import Q4 from "../wizard/q4"
import Q5 from "../wizard/q5"
import Confirm from "../wizard/confirm"

export class Riddle extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    q1: "",
    q4: "",
    q2: "",
    q3: "",
    q5: "",
  }

  // Method to proeed to the next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  // Method to go to the previous step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  // Handle field state change (when any input field is updated)
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    // Destructuring step state
    const { step } = this.state

    // Destructring state for all form parameters
    const { firstName, lastName, email, q1, q4, q2, q3, q5 } = this.state

    const values = {
      firstName,
      lastName,
      email,
      q1,
      q4,
      q2,
      q3,
      q5,
    }

    switch (step) {
      case 1:
        return (
          <div>
            <Q1
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            >
              <Dots curStep={this.state.step}></Dots>
            </Q1>
          </div>
        )
      case 2:
        return (
          <Q2
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          >
            <Dots curStep={this.state.step}></Dots>
          </Q2>
        )
      case 3:
        return (
          <Q3
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          >
            <Dots curStep={this.state.step}></Dots>
          </Q3>
        )
      case 4:
        return (
          <Q4
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          >
            <Dots curStep={this.state.step}></Dots>
          </Q4>
        )
      case 5:
        return (
          <Q5
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          >
            <Dots curStep={this.state.step}></Dots>
          </Q5>
        )
      case 6:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 7:
        return <h1>Success</h1>

      default:
        return <Layout></Layout>
    }
  }
}

{
  /*  
  </Layout> */
}

export default Riddle
