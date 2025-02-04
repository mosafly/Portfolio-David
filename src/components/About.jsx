import { motion } from "framer-motion"

export default function About() {
  return (
    &lt;section id="about" className="py-20"&gt;
      &lt;motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      &gt;
        &lt;div className="space-y-4"&gt;
          &lt;h2 className="text-3xl font-bold"&gt;À propos&lt;/h2&gt;
          &lt;p className="text-lg leading-relaxed"&gt;
            Développeur Full Stack passionné avec 5 ans d'expérience dans la création
            d'applications web modernes et performantes. Spécialisé en React, Node.js
            et architectures cloud.
          &lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="relative"&gt;
          &lt;img
            src="/profile.jpg"
            alt="David AMOS"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          /&gt;
        &lt;/div&gt;
      &lt;/motion.div&gt;
    &lt;/section&gt;
  )
}
