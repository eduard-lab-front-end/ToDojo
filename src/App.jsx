import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import { TeamPage } from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <section className="vh-100 gradient-custom content">
      <Header />
      <div className="content-container p-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
}

export default App;
