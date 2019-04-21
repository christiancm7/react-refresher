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
        {title}</p>
      </div>
    )
  }
}
// ProptTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
