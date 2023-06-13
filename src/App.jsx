import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Home,SingleCountry } from "./components";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Navbar toggleMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<SingleCountry />} />
      </Routes>
    </>
  );
}
