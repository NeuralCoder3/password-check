import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { hashPassword } from './hash';
// import { Crypto } from '@peculiar/webcrypto';
// import { pbkdf2, pbkdf2Sync } from 'crypto';
// import pbkdf2 from 'pbkdf2';
// import pbkdf2 from 'pbkdf2-sha256';
// import passwordHash from 'pbkdf2-password-hash'
// const passwordHash = require('pbkdf2-password-hash');
const pbkdf2 = require('pbkdf2')

function App() {
  // const hash = pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
  // const hash = pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
  // const crypto = new Crypto();
  // const params = {
  //   iterations: 100000,
  //   salt: new Uint8Array([115, 97, 108, 116]),
  //   hash: 'SHA-512',
  // };
  // const hash = crypto.subtle.deriveKey(
  //   {
  //     name: 'PBKDF2',
  //     ...params,
  //   },
  //   await crypto.subtle.importKey(
  //     'raw',
  //     new Uint8Array([112, 97, 115, 115, 119, 111, 114, 100]),
  //     'PBKDF2',
  //     false,
  //     ['deriveKey']
  //   ),
  //   { name: 'AES-CBC', length: 256 },
  //   true,
  //   ['encrypt', 'decrypt']
  // );
  // const hash = 42;

  const [hash, setHash] = React.useState('42');

  const computeHash = async (pwd: string) => {
    // hashPassword(pwd,
    //   function (err, hash) {
    //     if (err || !hash) {
    //       console.log(err);
    //     } else {
    //       setHash(hash.toString('hex'));
    //     }
    //   }
    // );
    const hash = pbkdf2.pbkdf2Sync(pwd, 'salt', 10000, 512, 'sha512');
    setHash(hash.toString('hex'));
    // passwordHash.hash('password', { iterations: 100, digest: 'sha1', keylen: 16, saltlen: 16 })
    //   .then((hash: string) => {
    //     setHash(hash);
    //     //> hash === 'sha1$100$16$fwzPKhZjCQSZMz+hY7A29A==$KdGdduxkKd08FDUuUVDVRQ=='
    // });
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
