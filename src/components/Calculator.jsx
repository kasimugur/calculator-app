import { useState } from "react";
import { CalcContext } from "../context";
import Button from "./Button";

export default function Calculator() {
  const [num, setNum] = useState('')
  const [score, setScore] = useState('')
  return (
    <>
      <CalcContext.Provider>
        <div className="header">
          <h1>calc</h1>
          <label>THEME
            <input type="radio" id="inp-rad" />
          </label>
        </div>
        <form className="main">
          <input
          onChange={e => setNum(e.target.value)}
          type="number" id="inp-num" />
          <h1>{num} </h1>
        </form>
        <Button />
      </CalcContext.Provider>
    </>
  )
}