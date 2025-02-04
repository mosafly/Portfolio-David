import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { name: "À propos", href: "about" },
  { name: "Projets", href: "projects" },
  { name: "Compétences", href: "skills" },
  { name: "Contact", href: "contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    &lt;header className="sticky top-0 bg-white/95 backdrop-blur z-50"&gt;
      &lt;div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
        &lt;div className="flex items-center justify-between h-16"&gt;
          &lt;h1 className="text-xl font-bold text-primary"&gt;David AMOS&lt;/h1&gt;
          &lt;nav className="hidden md:flex space-x-8"&gt;
            {navLinks.map((link) =&gt; (
              &lt;Link
                key={link.href}
                to={link.href}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary transition-colors"
              &gt;
                {link.name}
              &lt;/Link&gt;
            ))}
          &lt;/nav&gt;
          &lt;button
            onClick={() =&gt; setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary"
          &gt;
            {isOpen ? &lt;X size={24} /&gt; : &lt;Menu size={24} /&gt;}
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/header&gt;
  )
}
