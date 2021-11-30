import React from 'react';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <div>
      {code ? <Dashboard code={code}/> : <Login/>}
    </div>
  );
}

export default App;
