import styles from './App.module.css';

function App() {
  const age = 20;
  const isGreen = false;

  return <div className={styles.App}>
    {
      isGreen && <button>THIS IS A BUTTON</button>
    }

    <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>
  </div>
}

export default App;
