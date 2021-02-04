import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <p>Begin editing App.js to start developing your App!</p>
      {process.env.testVar}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
