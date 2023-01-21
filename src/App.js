import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landingPage";
import UserInfo from "./pages/userInfo";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/user" element={<UserInfo />} />
      
    </Routes>
  );
}

export default App;
