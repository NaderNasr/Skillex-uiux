import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar';

const App = () => {

  const [panel, setPanel] = useState(true);
  const [panel2, setPanel2] = useState(false);
  const [panel3, setPanel3] = useState(false);
  const [panel4, setPanel4] = useState(false);


  const toggleReadMore = () => {
    setPanel(!panel)
    setPanel2(false)
    setPanel3(false)
    setPanel4(false)
  }

  const toggleReadMore2 = () => {
    setPanel2(!panel2)
    setPanel(false)
    setPanel3(false)
    setPanel4(false)

  }

  const toggleReadMore3 = () => {
    setPanel3(!panel3)
    setPanel2(false)
    setPanel(false)
    setPanel4(false)

  }

  const toggleReadMore4 = () => {
    setPanel4(!panel4)
    setPanel2(false)
    setPanel(false)
    setPanel3(false)

  }


  return (
    <>
      <NavBar />
      <div id='main'>
      <div className='hero-words'>
        <h1>Travel.</h1>
        <h1>Explore.</h1>
        <h1>Learn.</h1>
      </div>
        <div className='panels'>
          <section className={panel ? 'active panel' : 'panel'} id='panel' onClick={toggleReadMore}>
            <h3 className="text">Restaurants</h3>
          </section>
          <section className={panel2 ? 'active panel' : 'panel'} id='panel' onClick={toggleReadMore2}>
            <h3 className="text">Nature</h3>
          </section>
          <section className={panel3 ? 'active panel' : 'panel'} id='panel' onClick={toggleReadMore3}>
            <h3 className="text">Wild Life</h3>
          </section>
          <section className={panel4 ? 'active panel' : 'panel'} id='panel' onClick={toggleReadMore4}>
            <h3 className="text">Beach</h3>
          </section>
        </div>
      </div>
    </>
  )
}

export default App