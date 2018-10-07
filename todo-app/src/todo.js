import React, { Component } from 'react'

const Todo = ({ data, deleteData }) => {
  let item = data.length ? (data.map(item => {

    return <div className="collection-item" key={item.id}>
      <span>{item.content}</span> <span className="sp" onClick={() => { deleteData(item.id) }}><a className="btn-floating disabled red"><i class="material-icons">clear</i></a></span>
    </div>
  })) : (
      <h2 className="center">There are no items here.............</h2>
    )
  return (
    <div className="todos collection">{item}</div>
  )
}

export default Todo;
