npx create-react-app mi-aplicacion
cd mi-aplicacion

// App.js
import React from 'react';
import './App.css';
import Logo from './Logo';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />
    </div>
  );
}

export default App;
}

// Logo.js
import React from 'react';
import logoImage from './logo.png';

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo de préstamo de libros" />
    </div>
  );
}

export default Logo;

// Menu.js
import React, { useState } from 'react';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu-container">
      <button onClick={toggleMenu}>Menú</button>
      {menuOpen && (
        <ul>
          <li>Inicio</li>
          <li>Categorías</li>
          <li>Mi Biblioteca</li>
          <li>Configuración</li>
          <li>Mi Perfil</li>
        </ul>
      )}
    </div>
  );
}

export default Menu;

// Menu.js
import React, { useState } from 'react';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu-container">
      <button onClick={toggleMenu}>Menú</button>
      {menuOpen && (
        <ul>
          <li>Inicio</li>
          <li>Categorías</li>
          <li>Mi Biblioteca</li>
          <li>Configuración</li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
