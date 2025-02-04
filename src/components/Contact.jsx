import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"
import VCardComponent from "./VCard"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Nom"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Envoyer
            </button>
          </form>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:david@example.com" className="hover:text-primary">
                david@example.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-primary" />
              <a
                href="https://linkedin.com/in/david-amos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                linkedin.com/in/david-amos
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github className="w-6 h-6 text-primary" />
              <a
                href="https://github.com/david-amos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                github.com/david-amos
              </a>
            </div>
            <VCardComponent />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
