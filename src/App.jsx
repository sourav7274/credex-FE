import "./App.css";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonial";
import ContactForm from "./components/Contact";
import ChatWidget from "./components/ChatWidget";
import { useEffect, useState } from "react";



function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      <div className="h-[100vh] w-[100%] bg-[#778da9] text-[#0d1b2a] dark:bg-[#0d1b2a] dark:text-[#778da9]">
        <div className="p-4 text-right">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-[#1b263b]  text-[#e0e1dd] dark:bg-[#e0e1dd] dark:text-[#0d1b2a] px-4 py-2 rounded"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget/>
      </div>
    </>
  );
}

export default App;
