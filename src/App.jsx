import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Overlay from "./components/overlay";
import { useTranslation } from "react-i18next";
import Team from "./components/team";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <main>
      <NavBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <Overlay />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <Team />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.div>
      <Footer />
    </main>
  );
}

export default App;