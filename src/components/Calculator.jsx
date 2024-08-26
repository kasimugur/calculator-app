import Button from "./Button";

export default function Calculator() {
  return (
    <>
    <div className="header">
      <h1>calc</h1>
      <label>THEME
         <input type="radio"  id="inp-rad" />
          </label>
    </div>
    <form className="main">
      <input type="number"  id="inp-num" />
      </form>
    <Button />
    </>
  )
}