import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Contacts from "./pages/Contacts";
import NewContacts from "./pages/NewContacts";
import ContactsBgComponents from "./components/ContactsBgComponents";
import WelcomeComponents from "./components/WelcomeComponents";
import LoginBgcomponent from "./components/LoginBgcomponent";
import AddingNewPage from "./pages/AddingNewPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/contacts/new" element={<NewContacts/>}/>
        <Route path="/ContactsBgComponents" element={<ContactsBgComponents/>}/>
        <Route path="/WelcomeComponents" element={<WelcomeComponents/>}/>
        <Route path="/LoginBgcomponent" element={<LoginBgcomponent/>}/>
        <Route path="/addNew" element={<AddingNewPage/>}/>
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
