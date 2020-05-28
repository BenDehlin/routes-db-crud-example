import React, { Component } from "react"
import Item from "./Item"
import axios from "axios"

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  componentDidMount() {
    this.setList()
  }

  setList = () => {
    axios
      .get("/api/people")
      .then((res) => {
        this.setState({ list: res.data })
      })
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <div>
        {this.state.list.map((item) => {
          return <Item key={item.id} setList={this.setList} item={item} />
        })}
      </div>
    )
  }
}

export default List
