
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
//import Nota from './components/Nota'
import NoteLista from './components/NoteLista';
import Login from './components/Login';
import Ajustes from './components/Ajustes'
import FormNewUser from './components/FormNewUser'
import AjustesNote from './components/AjustesNote'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/noteLista" element={<NoteLista/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/ajustes" element={<Ajustes/>}/>
      <Route path="/registro" element={<FormNewUser/>}/>
      <Route path="/edit" element={<AjustesNote/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
