import { useState } from 'react';
import './App.css';

function App() {

  const [ika, setIka] = useState('')
  const [yläraja, setYläraja] = useState('')
  const [alaraja, setAlaraja] = useState('')


  function laske(e){
    e.preventDefault()
    const ylaraja = (220-ika) * 0.85
    const alaraja = (220-ika) * 0.65
    setYläraja(ylaraja)
    setAlaraja(alaraja)
  }
  
  return (
 <div id="content">
  <h3> Sykerajat Laskuri</h3>
  <form onSubmit={laske}>
    <div> Ikä 
    <input value={ika} onChange={e => setIka(e.target.value)}/>
    </div>
    <div>
      <label> syke rajat</label>
      <output> {alaraja}-{yläraja}</output>
    </div>
    <button> Laske</button>
  </form>
 </div>
  );
}

export default App;
