import { motion } from "framer-motion"

const projects = [
  {
    title: "Plateforme E-commerce",
    description: "Solution complète de commerce électronique avec paiement en ligne",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Application de Gestion de Projets",
    description: "Outil collaboratif pour la gestion de projets en équipe",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Système de Réservation en Ligne",
    description: "Plateforme de réservation pour les professionnels",
    technologies: ["Next.js", "GraphQL", "PostgreSQL"],
  },
]

export default function Projects() {
  return (
    &lt;section id="projects" className="py-20"&gt;
      &lt;motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      &gt;
        &lt;h2 className="text-3xl font-bold"&gt;Projets&lt;/h2&gt;
        &lt;div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"&gt;
          {projects.map((project, index) =&gt; (
            &lt;div
              key={index}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            &gt;
              &lt;h3 className="text-xl font-semibold mb-2"&gt;{project.title}&lt;/h3&gt;
              &lt;p className="text-secondary mb-4"&gt;{project.description}&lt;/p&gt;
              &lt;div className="flex flex-wrap gap-2"&gt;
                {project.technologies.map((tech, i) =&gt; (
                  &lt;span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  &gt;
                    {tech}
                  &lt;/span&gt;
                ))}
              &lt;/div&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/motion.div&gt;
    &lt;/section&gt;
  )
}
