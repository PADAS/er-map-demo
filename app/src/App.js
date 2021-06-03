import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <h1>Er-Demo-site</h1>
      <div>
        {/* <p>ER MAP</p> */}
        <iframe height="500" width="1200" title="ER MAP" src={`${process.env.PUBLIC_URL}/build/index.html`}></iframe>
      </div>
    </div>
    </>
  );
}

export default App;
