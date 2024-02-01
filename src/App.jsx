import './App.css';
import {Route, Routes} from "react-router-dom";
import AddContact from "./components/AddContact.jsx";
import SideBar from "./components/SideBar.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SideBar/>}/>
                <Route path="/add-contact" element={<AddContact/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </>
    );
}

export default App;