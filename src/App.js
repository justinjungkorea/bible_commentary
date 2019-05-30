import React, { Component } from 'react';
import './App.css';
import book from "./book.json";

class App extends Component{
  state = {
    data: []
  }

  _loadingOT = () => {
    let temp = [];
    for(let i=1;i<7;++i){
      temp.push(book.data[0].books.old_testment[i]);
    }
    this.setState({
      data : temp
    });
    console.log(this.state.data.length);
  };

  _loagingNT = () => {
    let temp = [];
    for (let i = 1; i < 13; ++i) {
      temp.push(book.data[0].books.new_testment[i]);
    }
    this.setState({
      data: temp
    });
  }

  _displayData = () => {
    const items = this.state.data.map(data => {
      return (
        <button className="testment" id={data.num} key={data.num} onClick={this._selectBook}>{data.name}</button>
      );
    });
    return items;
  };

  _selectBook = event => {
    let n = event.target.id;
  };

  render(){
    return(
      <div className="AppDisplay" align="center">
        <button id="ot" onClick={this._loadingOT}>
          구약
        </button>
        <button id="nt" onClick={this._loagingNT}>
          신약
        </button>
        <div className="books">
          {this.state.data.length!==0 ? this._displayData() : null}
        </div>
      </div>
    )
  }
  
}

export default App;
