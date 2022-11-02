
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {process.env.REACT_APP_BACKEND_API}
      </header>
    </div>
  );
}

export default App;
