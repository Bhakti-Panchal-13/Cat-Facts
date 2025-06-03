import './App.css'
import RandomFactFetcher from  "./Fetch.jsx"

function Description(){
  return <h3>Hi I am the Description!</h3>
}

function App() {
  return (
    <>
    <h1 style={{color:"#7c3aed", marginTop:"0"}}>🐾 CatCurious 🐾</h1>
      <RandomFactFetcher/>
    </>
  )
};

export default App
