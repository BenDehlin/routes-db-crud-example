import React, { Component } from "react"
import axios from "axios"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      name: "",
      age: "",
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      axios.get(`/api/person/${id}`).then((results) => {
        this.setState({
          name: results.data.name,
          age: results.data.age,
          isEdit: true,
        })
      })
    }
  }
  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params
    if (!id && prevProps.match.params.id) {
      this.setState({ isEdit: false, name: "", age: "" })
    }
  }

  handleChange = ({ name, value }) => {
    this.setState({ [name]: value })
  }

  handleAdd = () => {
    const { name, age } = this.state
    axios.post("/api/people", { name, age }).then(() => {
      this.props.history.push("/")
    })
  }
  handleEdit = () => {
    const { name, age } = this.state
    axios
      .put(`/api/people/${this.props.match.params.id}`, { name, age })
      .then(() => {
        this.props.history.push("/")
      })
  }

  render() {
    const { name, age, isEdit } = this.state
    return (
      <div>
        <input
          name="name"
          value={name}
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name="age"
          value={age}
          type="number"
          onChange={(e) => this.handleChange(e.target)}
        />
        {isEdit ? (
          <button onClick={this.handleEdit}>Edit</button>
        ) : (
          <button onClick={this.handleAdd}>Add</button>
        )}
      </div>
    )
  }
}

export default Form
