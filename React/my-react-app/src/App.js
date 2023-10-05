import React from 'react'

const bgred={
  backgroundColor: 'red'
}
function App() {
  return (
    <div>
      <h1 style={bgred}>Internal CSS</h1>
      <h1 style={{backgroundColor: 'green'}}>Inline CSS</h1>

    </div>
  )
}


export default App;