import React from 'react'
import { connect } from 'react-redux'


const CommentList = (props) => {
  const getList = () => {
    if (props.list.length === 0) {
      return (
        <li>There is no comments yet</li>
      )
    }
    return props.list.map(item => (
      <li key={item.id} data-id={`${item.id}`}>{item.comment}</li>
    ))
  }
  return (
    <ul>{getList()}</ul>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.comments
  }
}


export default connect(mapStateToProps, null)(CommentList)
