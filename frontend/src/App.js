import { Button } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* adding all the routes */}
        <Route path="/" Component={Homepage} exact />
        <Route path="/chats" Component={Chatpage} exact />
      </Routes>
    </div>
  );
}

export default App;
