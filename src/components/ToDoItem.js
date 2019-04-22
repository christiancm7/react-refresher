import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
      return {
        background: '#f4f4f4',
        pading: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
  }

  markComplete = (event) => {
    console.log('Clicked!');
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}
// ProptTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  position: 'absolute',
  right: '0px'

}

export default TodoItem;
