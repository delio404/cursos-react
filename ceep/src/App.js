import React from 'react'


function App() {
  return (
    <section>
    <form>
      <input type='text' placeholder='Titulo'></input>
      <textarea placeholder='Escreva sua nota'></textarea>
      <button>criar nota</button>
    </form>
    <ul>
      <li>
        <section>
          <header>
            <h3>Titulo</h3>
          </header>
          <p>Escreva sua nota a</p>
        </section>
      </li>
      <li>
        <section>
          <header>
            <h3>Titulo</h3>
          </header>
          <p>Escreva sua nota</p>
        </section>
      </li>
      <li>
        <section>
          <header>
            <h3>Titulo</h3>
          </header>
          <p>Escreva sua nota</p>
        </section>
      </li>
    </ul>
    </section>
  );
}

export default App;
