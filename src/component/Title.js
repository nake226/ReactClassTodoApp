import React, { Component } from 'react';

// クラス名は任意だがファイル名と揃えるのがベター
class Title extends Component {
  render() {
    return (
      <h1>Todo App</h1>
    )
  }
}
// 他のファイルでimportすると使える
export default Title;