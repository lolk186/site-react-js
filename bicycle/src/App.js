import HeaderComponent from './components/HeaderComponent';
import './App.css';
import BodyComponent from './components/BodyComponent';
import "../src/components/css/html.css"
import AboutComponent from "./components/AboutComponent"


function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <BodyComponent/>
        <AboutComponent/>
    </div>
  );
}

export default App;
