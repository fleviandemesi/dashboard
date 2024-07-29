import './App.css';
import AddNurse from './components/addnurse/AddNurse';
import AddTests from './components/addtests/AddTests';
import LabTests from './components/labtests/LabTests';
import MainContent from './components/maincontent/MainContent';
import MyBooking from './components/mybooking/MyBooking';
import NotFound from './components/notfound/NotFound';
import Nurse from './components/nurses/Nurse';
import Profile from './components/profile/Profile';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/topbar/TopBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TopBar/>
      <Routes>
      <Route index  element={<MainContent />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addnurse" element={<AddNurse />} />
      <Route path="/viewnurse" element={<Nurse />} />
      <Route path="/addtests" element={<AddTests />} />
      <Route path="/labtests" element={<LabTests />} />
      <Route path="/mybooking" element={<MyBooking />} />
      <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
