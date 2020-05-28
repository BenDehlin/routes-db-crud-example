import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

function Item({item, history, setList}){
    const deleteItem = () => {
        axios.delete(`/api/people/${item.id}`).then((res) => {
            setList()
        })
    }
    return (
        <div>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <button
            onClick ={() => history.push(`/form/${item.id}`)}
            >Edit</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default withRouter(Item)