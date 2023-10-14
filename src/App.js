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


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Service-Project" element={<Home />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/" element={<Home />} />
   
      </Routes>
      <Footer />
    </Router>
  );
}

