import { useState } from 'react';
import classes from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <p onClick={() => setCount(count + 1)}>{count}</p>
    </div>
  );
}

export default App;
