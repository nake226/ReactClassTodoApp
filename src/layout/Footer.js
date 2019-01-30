import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <div>
        <label><input type="radio" value="all"
          onChange={(e) => this.props.handleFilterChange('all')}
          checked={this.props.filterType === "all"}/>すべて</label>

        <label><input type="radio" value="active"
          onChange={(e) => this.props.handleFilterChange('active')}
          checked={this.props.filterType === "active"}/>未完了のみ</label>

        <label><input type="radio" value="completed"
          onChange={(e) => this.props.handleFilterChange('completed')}
          checked={this.props.filterType === "completed"}/>完了のみ</label>
      </div>
    );
  }
}

export default Footer;