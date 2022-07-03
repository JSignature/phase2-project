import './App.css'
import NavBar from './NavBar'
import { ComputerImage, HomeH1, HomeH2 } from './StyledComponents/Home.styled'

function App() {
  return (
    <div>
      <NavBar />
      <HomeH1>Email Template Helper</HomeH1>
      <ComputerImage src="./img/computer.png" alt="Picture of computer" />
      <HomeH2>Never draft the same Email twice</HomeH2>
    </div>
  )
}

export default App
