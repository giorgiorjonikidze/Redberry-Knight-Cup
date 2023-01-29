import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landingPage";
import UserInfo from "./pages/userInfo";
import ExperiencePage from "./pages/experiencePage";
import SuccessPage from "./pages/successPage";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/user" element={<UserInfo />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/success" element={<SuccessPage />} />
      
    </Routes>
  );
}

export default App;
