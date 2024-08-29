import { useContext } from "react"
import { CalcContext } from "../context"

export default function Button() {
  const { num, setNum, calculator, setScore, setSign } = useContext(CalcContext)
  console.log("nummm", num)
  return (
    <>
      <div className="card">
        <button
          value={7} onClick={(e) => setNum(e.target.value)}

          className="btn">7</button>
        <button
          value={8} onClick={(e) => setNum(e.target.value)} className="btn"
        >8</button>
        <button
          value={9} onClick={(e) => setNum(e.target.value)} className="btn"
        >9</button>
        <button
          onClick={(e) => setNum(e.target.value)} className="btn"
        >DEL</button>
        <button
          value={4} onClick={(e) => setNum(e.target.value)} className="btn"
        >4</button>
        <button
          value={5} onClick={(e) => setNum(e.target.value)} className="btn"
        >5</button>
        <button
          value={6} onClick={(e) => setNum(e.target.value)} className="btn"
        >6</button>
        <button
          value={'+'} onClick={(e) => setSign(e.target.value)} className="btn"
        >+</button>
        <button
          value={1} onClick={(e) => setNum(e.target.value)} className="btn"
        >1</button>
        <button
          value={2} onClick={(e) => setNum(e.target.value)} className="btn"
        >2</button>
        <button
          value={3} onClick={(e) => setNum(e.target.value)} className="btn"
        >3</button>
        <button
          value={"-"} onClick={(e) => setSign(e.target.value)} className="btn"
        >-</button>
        <button
          value={","} onClick={(e) => setSign(e.target.value)} className="btn"
        >.</button>
        <button
          value={0} onClick={(e) => setNum(e.target.value)} className="btn"
        >0</button>
        <button
          value={"/"} onClick={(e) => setSign(e.target.value)} className="btn"
        >/</button>
        <button
          value={"*"} onClick={(e) => setSign(e.target.value)} className="btn"
        >x</button>
        <div className="btnReset">
      <button onClick={() => setScore('')} className="btn deff" id="reset">RESET</button>
      <button onClick={() => calculator()} className="btn deff" id="enter">=</button>
        </div>
      
      </div>
      
    </>
  )
}