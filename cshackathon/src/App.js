function App() {
  function handleClick() {
    console.log("button was clicked");
  }
  return (
    <div className="App">
      <div className="box">
        <p className="random-text">test</p>
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
  );
}

export default App;
