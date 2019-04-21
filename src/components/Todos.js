import React, {Component} from 'react';
import Todoitems from './ToDoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
    
    render() {
        console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <Todoitems key={todo.id} todo={todo} />
        ));
    }
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;