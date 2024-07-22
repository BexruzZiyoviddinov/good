import Heder from './components/heder'
import Carusel from './components/Carusel'
import Porular from './components/porular'

import "./App.css";

function App() {

  return (
    <>
      <Heder/>
      <br />
      <br />
      <div className="carusel">
        <Carusel/>
        <div className="carusel-In">
          <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fair-from.d85b02d4.jpg&w=384&q=75" alt="" />
          <br />
          <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frefrigerator-mini-oven.915963e6.png&w=384&q=75" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <Porular/>
    </>
  )
}

export default App
