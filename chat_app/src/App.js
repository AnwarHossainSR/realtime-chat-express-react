import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Chat from "./component/chat/Chat";
import Join from "./component/join/Join";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
