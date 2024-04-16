import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Contacts from "./pages/Contacts";
import NewContacts from "./pages/NewContacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/contacts/new" element={<NewContacts/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
