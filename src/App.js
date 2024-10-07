import './App.css';
import React, { useEffect, useState } from "react";


import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cat } from './Cat';

import resetBtn from './design/reset.svg';
import headimg from './design/hedimg.png';



function App() {
  return (
    <div className="App">
      <header>
        <div class="reset">
          <img src={resetBtn} onClick={()=>clickedBtn()} alt="menu" width="45"/>
        </div>
        <img src={headimg} alt='hdd' class='hdd' width="100"/>
      </header>
      <div class="main">
        <Cat/>
      </div>
    </div>
  );
}
function clickedBtn(){
  window.location.reload();
}

export default App;
