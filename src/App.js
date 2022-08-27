import { useState } from 'react';
import './App.css'

const App = () => {

  const [isActive, setIsActive] = useState(!false);
  console.log('1',isActive)

  const handleClick = (e) => {
    console.log(e.target.id)
    setIsActive(current => !current);
    console.log('2',isActive)
  };

  return (
    <>
      <div id='main'>
        <section className={isActive ? 'active panel' : 'panel'} id='panel' onClick={handleClick}>
          <h3 className="text">Mountains</h3>
        </section>
      </div>
    </>
  )
}

export default App