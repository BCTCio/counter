import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [counter, setCounter] = useState(0);

  const addNum = () => {
    setCounter(counter + 1);
  };
  const minusNum = () => {
    if (counter === 0) {
      alert('Number cannot be under 0');
    } else {
      setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Display data={counter} />
        <Button handleClick={addNum} buttonText='+' />
        <Button handleClick={minusNum} buttonText='-' />
        <Button handleClick={reset} buttonText='reset' />
      </header>
    </div>
  );
}

export default App;
