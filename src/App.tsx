import React from 'react';
import './App.css';
const pbkdf2 = require('pbkdf2')

function App() {

  const [hash, setHash] = React.useState('42');

  const computeHash = async (pwd: string) => {
    const hash = pbkdf2.pbkdf2Sync(pwd, 'salt', 10000, 512, 'sha512');
    setHash(hash.toString('hex'));
  };

  return (
    <div className="App">
      Hash: {hash} <br />
      <button onClick={() => computeHash('password')}>Hash</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React: {hash}
        </a>
      </header> */}
    </div>
  );
}

export default App;
