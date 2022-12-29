import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "solid-app-router";
import Accueil from "./pages/accueil";
function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
            <Route path="/" component={Accueil} />
            <Route path="/login" component={Accueil} />
        </Routes>
    </div>
  );
}

export default App;
