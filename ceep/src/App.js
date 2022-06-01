import React from 'react'
import { ListaDeNotas } from './components/ListaDeNotas';


function App() {
  return (
    <section>
    <form>
      <input type='text' placeholder='Titulo'></input>
      <textarea placeholder='Escreva sua nota'></textarea>
      <button>criar nota</button>
    </form>
    <ListaDeNotas/>
    </section>
  );
}

export default App;
