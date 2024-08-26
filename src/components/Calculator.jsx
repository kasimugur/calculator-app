import { useState } from "react";
import { CalcContext } from "../context";
import Button from "./Button";

export default function Calculator() {
  const [num, setNum] = useState('')
  const [score, setScore] = useState('')
  const [sign, setSign] = useState("")

  const calculator = () => {
    // const scores = Number(num)
    // const scores2 = Number(num)
    if (sign === "*") {
      const basket = + num
      console.log("baskettt", basket)
    }
    // if (sign === "+") {
    //   const total = scores + scores2
    //   setScore(total)
    // }
    // if (sign === "-") {
    //   const total = scores - scores2
    //   setScore(total)
    // }
    // if (sign === "*") {
    //   const total = scores * scores2
    //   setScore(total)
    // }
    // if (sign === "/") {
    //   const total = scores / scores2
    //   setScore(total)
    // }
  }
  const data = { num, setNum, calculator, setScore, setSign }
  console.log("scoreeee--", score)
  console.log("signnn--", sign)
  return (
    <>
      <CalcContext.Provider value={data} >
        <div className="header">
          <h1>calc</h1>
          <div>
            theme
            <div className="radio">

              <span>1 2 3</span>
              <input type="radio" id="inp-rad" />
            </div>
          </div>
        </div>
        <div
          className="main"
          value={score}
          type="number">399,981</div>
        <Button />
      </CalcContext.Provider>
    </>
  )
}