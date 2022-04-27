import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Pages/HomePage/HomePage';
import TutorialsPage from './components/Pages/TutorialsPage/TutorialsPage';
import ContactPage from './components/Pages/ContactPage/ContactForm';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<TutorialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
