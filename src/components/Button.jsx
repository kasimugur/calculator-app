import styled from "styled-components"

export default function Button() {
  const Button = styled.button`
  background-color: red;
  `;
  return (
    <>
    <div className="card">
      <Button>normal</Button>
    <button className="btn">7</button>
    <button className="btn">8</button>
    <button className="btn">9</button>
    <button className="btn">DEL</button>
    <button className="btn">4</button>
    <button className="btn">5</button>
    <button className="btn">6</button>
    <button className="btn">+</button>
    <button className="btn">1</button>
    <button className="btn">2</button>
    <button className="btn">3</button>
    <button className="btn">-</button>
    <button className="btn">.</button>
    <button className="btn">0</button>
    <button className="btn">/</button>
    <button className="btn">x</button>
    <div className="btnReset">
    <button className="btn">RESET</button>
    <button className="btn">=</button>

    </div>
    </div>
    </>
  )
}