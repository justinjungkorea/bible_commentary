import React, { Component } from 'react';
import './App.css';
import PDFViewer from './pdfviewer';
import PDFJSBackend from './backend/pdfjs';
import WebviewerBackend from './backend/webviewer';

class App extends Component{

  constructor(){
    super();
    this.myViewer = React.createRef();
  }

  render(){
    return (
      <div className="App">
        <PDFViewer backend={WebviewerBackend} 
          src='/CSS3.pdf' />
      </div>
    )
  }
}

export default App;
