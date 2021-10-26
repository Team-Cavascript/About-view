import "./App.css";
import { LoginView } from "./view";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Route exact path="/" component={LoginView} />
    </div>
  );
}

export default App;
