import React, { Component } from 'react';
import './App.css';
import book from "./book.json";
import { Redirect } from "react-router-dom";

class App extends Component{
  state = {
    data: [],
    no: null
  }

  _loadingOT = () => {
    let temp = [];
    for(let i=1;i<7;++i){
      temp.push(book.data[0].books.old_testment[i]);
    }
    this.setState({
      data: temp,
      no: 1
    });
  };

  _loagingNT = () => {
    let temp = [];
    for (let i = 1; i < 13; ++i) {
      temp.push(book.data[0].books.new_testment[i]);
    }
    this.setState({
      data: temp,
      no: 2
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
    let n = event.target.id-1;
    if(this.state.no === 2){
      n = n-6;
    }
    window.location.assign(this.state.data[n].link);
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
        <p align="left" id="notice">
          파일은 sermon-online.com에서 가져왔으며 오류 및 수정은 메일로 알려주시기 바랍니다.
        </p>
        <button id="mail"><a href="mailto:jungdw0624@gmail.com" >메일</a></button>
      </div>
    )
  }
  
}

export default App;
