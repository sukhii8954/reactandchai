import Chai from "./Chai"

function App() {
const username = "yt channel"

  return (
    <>
      <div>
         <Chai/>          
          {/* evaluated expression */}
         <h1>Chai aur react  {username}</h1>
         <p>test para</p>
      </div>
    </>
  )
}

export default App