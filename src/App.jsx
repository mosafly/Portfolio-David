import { motion } from "framer-motion"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function App() {
  return (
    &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
      &lt;Header /&gt;
      &lt;motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      &gt;
        &lt;About /&gt;
        &lt;Projects /&gt;
        &lt;Skills /&gt;
        &lt;Contact /&gt;
      &lt;/motion.main&gt;
    &lt;/div&gt;
  )
}
