import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [theme, setTheme] = useState('dark');
  
  function toggleTheme() {
    setTheme(prevTheme => {
      console.log(prevTheme)
      if(prevTheme === 'dark') return 'light';
      return 'dark';
    });
  }

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} handleToggle={toggleTheme}/>
      <Main theme={theme}/>
    </div>
  );
}

export default App;
