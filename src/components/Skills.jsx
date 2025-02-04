import { motion } from "framer-motion"
import { Code, Database, Cpu, Cloud, GitBranch } from "lucide-react"

const skills = [
  { name: "Frontend", icon: Code, technologies: ["React", "Vue.js", "Next.js"] },
  { name: "Backend", icon: Database, technologies: ["Node.js", "Express", "NestJS"] },
  { name: "DevOps", icon: Cpu, technologies: ["Docker", "Kubernetes", "AWS"] },
  { name: "Cloud", icon: Cloud, technologies: ["AWS", "GCP", "Azure"] },
  { name: "Versioning", icon: GitBranch, technologies: ["Git", "GitHub", "GitLab"] },
]

export default function Skills() {
  return (
    &lt;section id="skills" className="py-20"&gt;
      &lt;motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      &gt;
        &lt;h2 className="text-3xl font-bold"&gt;Compétences&lt;/h2&gt;
        &lt;div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"&gt;
          {skills.map((skill, index) =&gt; (
            &lt;div
              key={index}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            &gt;
              &lt;div className="flex items-center gap-4 mb-4"&gt;
                &lt;skill.icon className="w-8 h-8 text-primary" /&gt;
                &lt;h3 className="text-xl font-semibold"&gt;{skill.name}&lt;/h3&gt;
              &lt;/div&gt;
              &lt;div className="flex flex-wrap gap-2"&gt;
                {skill.technologies.map((tech, i) =&gt; (
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
