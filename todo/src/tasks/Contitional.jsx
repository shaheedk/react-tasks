import React, { useState } from 'react';
import '../App.css';

function Conditional() {
  const [login, setLogin] = useState(true);

  return (
    <div className={login ? 'dark' : 'light'}>
      <button onClick={() => setLogin(!login)}>
        {login ? 'Logout' : 'Login'}
      </button>
      <h1>{login ? 'Logged In' : 'Logged Out'}</h1>
    </div>
  );
}

export default Conditional;
