import React, { useEffect, useState } from "react";
import data from './data/data.json'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


import noBtn from './design/no.svg';
import qm from './design/question.svg'



export const Cat = () => {

  const [tbl, setTbl] = useState("");
  let curi =1
  const [showBtns, setShowBtns] = React.useState(true)

  return (
    <div class="all">
      {showBtns?<h1 class="title">?מה הקריאה</h1>:null}
      <div class="buttons">
        {showBtns?
          data.generalCat.map((d, index)=>(
            <div class="button"  onClick={()=>{clickedcat(d, curi)}}>
                <div class="semi"></div>
                <img src={require('./design/'+index+'.svg')} alt="img" width="50px"/>
                <p>{d[0]}</p>
            </div>
          )):null
        }
      </div>
      <p>{tbl}</p>
    </div>
  )
  function clickedcat(d, i){
    setShowBtns(false)
    let btns=null
    if(d[i+1] != null){
      btns = getTblOfButtons(d, i)
    }
    const nonlinks =[<div class="inscont">{getTblOfActions(d[i])}</div>]
    const title= <h1 class="subtitle">{d[0]}</h1>
    const all = [title, nonlinks, btns]
    setTbl(all)
  }
  function getTblOfActions(inp){
    return inp.map((todo)=>(
      <div class="alltxt">
        <div class="textcon">
          <p>{todo}</p>
        </div>
      </div>
    ))
  }
  function getTblOfButtons(inp, i){
    let a =[<div class='nobtn' onClick={()=>clickedNo(inp)}>
      <img src={noBtn} alt="no" width='100%'/>
    </div>]
    console.log(inp[i+1])
    let b = inp[i+1].map((todo)=>(
      <div class="otrbtns" onClick={()=>clickedlinks(todo)}>
        <p>{todo}</p>
        <img src={qm} alt="question" width='50%'/>
      </div>
    ))
    return [<div class="otrbtnscont">{a}{b}</div>]
  }
  function getLink(name){
      const mydata = data.generalCat
      for (let i = 0; i < mydata.length; i++) {
        if(mydata[i][0]==name){
          return mydata[i]
        }
    }
    return null 
  }
  function clickedNo(inp){
    curi = curi+2
    clickedcat(inp, curi)
  }
  function clickedlinks(name){
    curi=1
    let slink = getLink(name)
    if(slink!=null){
      clickedcat(getLink(name), curi)
    }
  }
}

