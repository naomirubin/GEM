import React from "react"

const Dots = (props) => {
  const falseDot = (
    <div
      style={{
        height: "15px",
        width: "15px",
        borderRadius: "50%",
        display: "inline-block",
        margin: "3px",
        backgroundColor: "#D3D3D3",
      }}
    ></div>
  )
  const trueDot = (
    <div
      style={{
        height: "15px",
        width: "15px",
        borderRadius: "50%",
        display: "inline-block",
        margin: "3px",
        backgroundColor: "#884be1",
      }}
    ></div>
  )

  const circleArray = [falseDot, falseDot, falseDot, falseDot, falseDot]
  circleArray[props.curStep - 1] = trueDot

  return <div style={{ marginBottom: "25px" }}>{circleArray}</div>
}

export default Dots
