import React, { Component } from 'react';

class TodoList extends Component {
  render(){
    // for文
    const nodes = [];
    const taskList = this.props.taskList;
    for (let i = 0; i < taskList.length; i++) {
      const item = taskList[i];

      let flag = true;

      if(this.props.filterType === "all") {

      } else if(this.props.filterType === "active") {
        if (item.completed === true) {
          flag = false;
        }
      } else if(this.props.filterType === "completed") {
        if (item.completed === false) {
          flag = false;
        }
      }

      if (flag === true) {
        nodes.push(
          <li key={item.key}>
           <label>
             <input
               type="checkbox"
               checked={item.completed}
               // onChangeのイベントでeのみ
               onChange={(e) => this.props.handleListChange(e, item.key)}
              />
             { item.label }
           </label>
         </li>
        );
      }
    }
    return(
      <div>
        {nodes}
      </div>
    );
  }
}

export default TodoList;