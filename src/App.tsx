import React from 'react';
import ReactLoading from 'react-loading';
import './App.css';
const pbkdf2 = require('pbkdf2')

// 3,2,2,1
const exampleHash = 'd6ec8a7edc620721a5cd4e7162c1aa51fa6462eadefce0898cd0c756a595756d082e98484a059cf623f148f05a2257a8f5d3d5a86d34fdeba2ef29613ac3f9f6a03b14fdae563d3f766071d0ea7865822ea00c56dcb7520930a123976527b3a797f5258f009cb580a4e9a0576baab93a569561f5d58e3fdf180b51c36362d2e4ec2bcdcfc3bb37df5344619926d95c1bef35a7fdd3b65107a4217ee83c28aa1581eae2d96e707006fe6a88a5620d69211f878151ee1e3888d33a8d8f25a7916fccc15cede241680f9da5c2f34f21eae3e3bc4139709ba2c1b1f4a953e4b6be9842535bb9fe5b6764443421b9b8b79e02fec915f2a885f24dfabab641df00315fe540e430a6cd61e8cf5c6d6277cc8dd83919b9f731fadaa67266fd9309eb8c8a17ad8246df2a85a211a4bd2c5533f1c2f2217c75000cfb121b5a66040233082644b1f726cf0b9d768b171aaee75243115ecac40eb1f86c5f3650234aa696bbe1f8ec7dff66b80117c4ca88f19d230eaca4592b15757c061fb1f24ced67be0d245375190b299d1270eb0764d7e7a42608e066a093f7afc23fdb3eb629706a14a9050491baa555bc95125e682977dc72b37680f14c953383de05da441e316bf2c526d46d734402b9092a8627aa34e8f853d78a534c1956cac0bb041b48bdcbecc9030aed42c7a279f7f33a3c93115af5e3c4f0dd0b8efa0c46951b2e7e16a4495e';
const solutionHash = 'd2493360c2d43f3f5ec837d8369adb96090e842aaf68b9dea19196b19a3551360de7b4d54ef2dd7804cde47659a6a1a1d0832316b517fe493eea432c72f3bde28663e8c724d07c354d35dcec10f1a4acfdd19942481e23c18a717f29b1ad138a644d71cac905c94154668b80eb36784610e280ab019091fd9f515cfb65d637f10e5e06e371ae06001c2d1930628046724e75509cdc18f29e2bb8e7dffe877c850b8ae478d7383203c0a9a191ebbcf0a2f74c7048fa97b372aef3eb549ac2233b01ba939cb220bd8b5c796d42fc387fc4631607cf38ab95336c6cb98e3ea3a7f3b5b171151eee6f63d3e1b5779ae8a4d7c3dced308dc7ca0dd6df2e0b34ad7fbdb0062f316678de276cf76750ae641e8c1250b580b9d95f5151fd652b5010ba811b1778573d54ba70bed8fa0f325ec436af252e2fcc9bbe78cb8ff6e530ee62392b0713d8f4f75f8ef5be95898d7de1672b3c0b5fae1ea4f94b7cdef38be94bfd5cfad1cd66eae2f222d0d20f28f675a90a5e08a1846334694b51e4a89b66b6bd37d1908d7e6d3f84156ba0bf3971b9b878d36bdfe076a94ac5a02dfff7c354752de911dac08a757c37855a59f32579edfa6feba61d810eb8b2034a280144805d9bcc977466b7ff3f42adfb59da3e4a5d8f45228dc1f0f5db3e39826660e690b7f38b33a76f6d46afe470aa4a2b44fbc2a3b5e9b1a7d9dea8ca2e6e6f978222f5';
const fourtyTwoHash = '12822b7c48524cc5dde612641e86f86c8af80cd10f3783d967db2706fd123b20ce454587a263f705a4ed9e32c7bcdaefec869eaa58089f19bab1522c7786b3fe3b0c89884a9bde941ffcfff249b1917419332b198e8ac6a291e8aae95a66a418bce7929079a02fe9f7be1748bf54bc9d52a16e9d63590a471ebbe8f105da7bb0571725a3d8ca71299d3af271fbc17ff550ce6a5b8a8a3ba63b967fe246fb4695f2b45ebac3b91a1cb2092b9fdfb665d8a88ad1eb581a51ef0e52f67bed57e6eaf9f65b62c125670815227120c4ee07bbc79af54584d4445367f4dfc16e47df9c3c36891656947cfd8ec432d96a1710e632a66c74fbc18ad82cbf8335c720759d9913497d1b780afc462386dfed28e308cc404d41776a579de91d36259bc4e5f50ec93801180e5d713c17ae38912fa5316b67b9839e21f655cf6326f2dcbc12e5e6d45cde6fb469bbe2f5eca6105121209e01923e55cbc216ca53732751eea17601229166e6ea6743035e7c64da88157f0c6f00bfe33cf27abf5ccb5d090b26cc85ef48e125b11f51d697df8222aa4dc0cfafb1e46ee2fd9f7ccd0b8f154b8685b9caaf582294d8e5ad94581c0495978f89c37ea3cfd4713b2cd5b53204d974aa68dfb87fb228afb9d5cf9078b2f19172fb2ab2150412d1329a60c853946dd247a843db43b53f89c5213206becb46d9bccff951667707b8bc1184656057c5161e';




function App() {

  // const [hash, setHash] = React.useState('42');
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [statusText, setStatusText] = React.useState('');

  const handleHash = (hash: string) => {
    if (hash === fourtyTwoHash) {
      setStatusText('This is not the password you are looking for.');
    } else if (hash === solutionHash) {
      setStatusText('You found the password!');
    } else if (hash === exampleHash) {
      setStatusText('This is the example not the solution!');
    }
  };


  const computeHash = async (pwd: string) => {
    setLoading(true);

    pbkdf2.pbkdf2(
      pwd,
      'aZN00cGoN1XgYcArVhIz',
      1000000,
      512,
      'sha512',
      (err: any, derivedKey: any) => {
        if (err) {
          setStatusText(err);
          setLoading(false);
          return;
        }
        const hash = derivedKey.toString('hex');
        console.log("hash", hash);
        // setStatusText('Hash generated!');
        handleHash(hash);
        setLoading(false);
      }
    );
  };

  const setPassphrase = (s: string) => {
    s = s.replace(/[ ]/g, '');
    // console.log('\'' + s + '\'');
    setPassword(s);
  };

  return (
    <div className="App">

      <form onSubmit={(e) => {
        e.preventDefault();
        computeHash(password);
      }}>
        <input type="text" value={password} onChange={(e) => setPassphrase(e.target.value)} placeholder='Passphrase' />
        <input type="submit" value="Check Passphrase" disabled={loading} />
      </form>

      <div className='info'>
        {
          loading ?
            <div className='loading'>
              <ReactLoading type='spin' color='lightblue' height={'20%'} width={'20%'} />
              <div className='loading-text'>Computing hash...</div>
            </div> :
            <div className='status'>
              <p>{statusText}</p>
            </div>
        }
      </div>

    </div>
  );
}



export default App;
