import { Route, Routes } from "react-router-dom"
import { StartTyping } from "./Component/StartTyping"
import TextWrapper from "./Component/TextWrapper"

function App() {

  return (
    <>
      <h1
        style={{
          textAlign: "center"
        }}
      >
        Type Your Story
      </h1>
      <Routes>
        <Route path="/" element={<StartTyping />} />
        <Route path="/sample" element={<TextWrapper />} />
        <Route path="/:id" element={<TextWrapper />} />
      </Routes>
    </>
  )
}

export default App
