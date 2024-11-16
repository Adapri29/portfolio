import { useEffect, useState } from "react"

export const useActiveSection = ({initialSection}) => {

    const [activeSection, setActiveSection] = useState(initialSection)

    useEffect(() => {
  
      const handleScroll = () => {
  
        const sections = document.querySelectorAll("section");
        let currentSection = initialSection
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          // Detectar si la sección está en el viewport
          if (window.scrollY >= sectionTop - sectionHeight / 2) {
            currentSection = section.id;
          }
        })
  
        setActiveSection(currentSection);
      }
  
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, [])

    return {
        activeSection
    }
}
