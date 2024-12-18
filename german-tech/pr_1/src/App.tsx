import { useState } from "react"
import "./App.css"
import { CommentList } from "./components/CommentList"

function App() {
  const [value, setValue] = useState<string>("")

  return (
    <>
      <label>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </label>
      <CommentList filter={value} />
    </>
  )
}

export default App
