import './App.css';
import Router from './router';
import { useCookies } from 'react-cookie';


function App() {
  const [cookies, setCookie] = useCookies(['name']);

  return (
    <Router/>
  );
}

export default App;
