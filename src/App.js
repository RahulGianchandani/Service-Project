import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect,Navigate
} from "react-router-dom";
import Home from './Pages/home';
import Footer from './Components/Footer';

import BookService from './Pages/bookService';
import Login from './Pages/login';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Service-Project" element={<Home />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/admin-login" element={<Login />} />
   
      </Routes>
      <Footer />
    </Router>
  );
}

