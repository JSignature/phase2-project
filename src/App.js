import './App.css'
import NavBar from './NavBar'
import {
  ComputerImage,
  HomeH1,
  HomeH2,
  ContentCard,
} from './StyledComponents/Home.styled'

function App() {
  return (
    <div>
      <NavBar />
      <HomeH1>Email Template Helper</HomeH1>
      <ContentCard>
        <div style={{ paddingRight: 40 }}>
          <h1>Easy as 1-2-3</h1>
          <ul>
            <li>Add your clients basic info</li>
            <li>Draft your email template with our simple placeholders</li>
            <li>Draft your email with a few simple clicks</li>
          </ul>
        </div>
        <img src="./img/computer.png" alt="Picture of computer" />
      </ContentCard>
      <HomeH2>Never draft the same Email twice</HomeH2>
    </div>
  )
}

export default App
