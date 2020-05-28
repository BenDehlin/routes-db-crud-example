import React from "react"
import { withRouter } from "react-router-dom"

function Header(props) {
  return (
    <header>
      <button onClick={() => props.history.push("/form")}>Add Item</button>
      <button onClick={() => props.history.push("/")}>Home</button>
    </header>
  )
}

export default withRouter(Header)
