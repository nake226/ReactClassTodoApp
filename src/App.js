import React, { Component } from 'react';
// 相対パスを指定しないとnode_modulesからモジュールを探してしまう
import Title from './component/Title'
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import Footer from './layout/Footer';

class App extends Component {
  // クラスを動かす際に必ず1回実行される関数
  // 正確には、stateを使うのに必要
  constructor(){
    // 継承元のクラスを初期化するために必要
    super();

    // ステート
    this.state = {
      // タスク名
      inputText: "",
      // タスクリスト
      taskList: [],
      // タスクの状態(all/active/completed)
      filterType: "all"
    };
    // イベントのバインド
    //this.handleListChange = this.handleListChange.bind(this);
  }

  // 入力したテキストをステートにセットする
  handleTextChange(e){
    this.setState({
      inputText: e.target.value
    })
  }

  // タスクの追加
  handleAddClick(e){
    // ステートから配列を持って来る
    // concat()の理由は、パフォーマンスではなく堅牢性
    // 万が一、'taskList'が他の関数によって汚染されると予期せぬ処理になる
    // そのため、concat()によってシャローコピーしたものを扱う
    const taskList = this.state.taskList.concat();
    taskList.push({
      // Reactは並列で並んでいる情報を見るのが苦手なので
      // keyという概念で区別している
      key: Date.now(),
      completed: false,
      label:  this.state.inputText
    });

    this.setState({
      taskList: taskList
    })
  }

  // タスク一覧の再描画
  handleListChange(e, key) {
    console.log(1);

    const checked = e.target.checked;
    console.log(checked);
    const taskList = this.state.taskList.concat();

    for (var i = 0; i < taskList.length; i++) {
      if (taskList[i].key === key) {
        taskList[i].completed = checked;
      }
    }
    // タスクリストの変更をする
    this.setState({
      taskList: taskList
    })
  }

  // 仮想DOMに変更があれば走る
  render() {

    // map()で配列の中身にそれぞれ処理をする
    // const nodes = this.state.taskList.map(item => {
    //   return (
    //     <li key={item.key}>
    //       <label>
    //         <input
    //           type="checkbox"
    //           checked = {item.completed}
    //           onChange={(e) => this.handleListChange(e, item.key)}
    //          />
    //         { item.label }
    //       </label>
    //     </li>);
    // })
    return (
      <div className="App">

        {/* アプリタイトル */}
        <Title />

        {/* タスクの追加 */}
        <AddTodo
          handleTextChange = {this.handleTextChange.bind(this)}
          handleAddClick = {this.handleAddClick.bind(this)}
        />

        {/* タスクリスト */}
        <TodoList
          // フィルタータイプ
          filterType = { this.state.filterType }
          // タスクリスト
          taskList = { this.state.taskList }
          // こっちはhandleListChangeが引数を2つ取ってるから2つ必要
          handleListChange = { (e, key) => this.handleListChange(e, key) }
        />

        {/* 状態の変化 */}
        <Footer
          filterType = { this.state.filterType }
          handleFilterChange = { filterType => this.handleFilterChange(filterType) }
        />

      </div>
    );
  }
  handleFilterChange(filterType){
    this.setState({
      filterType: filterType
    })
  }
}

export default App;
