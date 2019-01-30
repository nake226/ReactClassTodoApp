import React, { Component } from 'react';

class AddTodo extends Component {
  render(){
    return(
      <div>
        <input type="text"
          onChange={(e) => this.props.handleTextChange(e)}
          placeholder="タスクを入力してね"/>
        <button
          onClick={(e) => this.props.handleAddClick(e)}>追加</button>
      </div>
    );
  }
}

export default AddTodo;