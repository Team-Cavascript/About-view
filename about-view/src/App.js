import "./App.css";
import LoginPage from "./Login/LoginPage";
import Header from './component/Header/Header'

function App() {
  return (
    <div className="App">
      <Header onLogin={true} userName="Yasmin"/>
      <LoginPage />
    </div>
  );
}

export default App;
