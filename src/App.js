import "./App.css"
import { useState } from "react"

export const getTime = () => {
  let currentDate = new Date()

  let hours = currentDate.getHours()
  if (hours < 10) hours = `0${hours}`
  let minutes = currentDate.getMinutes()
  if (minutes < 10) minutes = `0${minutes}`

  let time = hours + ":" + minutes

  return time
}
export const getDate = () => {
  let currentDate = new Date()

  let day = currentDate.getDate()
  if (day < 10) day = `0${day}`
  let month = currentDate.getMonth() + 1
  if (month < 10) month = `0${month}`
  let year = currentDate.getFullYear()

  let completeDate = day + " del " + month + " de " + year
  return completeDate
}
function App() {
  let [inputText, setInputText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const actualTime = getDate() + "  a las  " + getTime()

    let textoGuardar = actualTime + " ----- " + inputText

    try {
      window.api.send("savenewfile", textoGuardar)
    } catch (error) {
      console.error(error)
    }

    setInputText("")
  }
  return (
    <div className="App">
      <div className="input">
        <form onSubmit={handleSubmit}>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            width="800"
            height="90"
            placeholder="To save, Enter ⏎"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}

export default App
