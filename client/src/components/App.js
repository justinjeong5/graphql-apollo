import React, { useState } from 'react'
import './style.css';
import './components.css'

import Roles from './Roles'
import Teams from './Teams'
import People from './People'

function App() {
  const [menu, setMenu] = useState('Roles')

  let mainComp = {
    Roles: (<Roles />),
    Teams: (<Teams />),
    People: (<People />),
  }

  function NavMenus() {
    return [
      'Roles', 'Teams', 'People'
    ].map((_menu, key) => {
      return (
        <li key={key} className={menu === _menu ? 'on' : ''}
          onClick={() => { setMenu(_menu); }}>{_menu}</li>
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Management</h1>
        <nav>
          <ul>
            {NavMenus()}
          </ul>
        </nav>
      </header>
      <main>
        {mainComp[menu]}
      </main>
    </div>
  );
}

export default App
