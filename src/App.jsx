import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "solid-app-router";
import Accueil from "./pages/accueil";
import Login from "./pages/login";
import Signup from "./pages/signup";
function App() {
  return (
    <div>
        <Routes>
            <Route path="/" component={Accueil} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </Routes>
    </div>
  );
}

export default App;
