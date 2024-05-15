npx create-react-app my-app
cd my-app

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Aplicación</h1>
        {/* Aquí va el contenido principal de tu aplicación */}
      </header>
      <footer className="App-footer">
        <nav>
          <ul>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/aviso-de-privacidad">Aviso de Privacidad</a></li>
            <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
